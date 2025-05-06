"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { InputField } from "./input-field";
import { InputPhoneField } from "./input-phone-field";
import { CPFInput } from "./input-cpf-field";
import {
  ContractFormFields,
  contractFormFieldsSchema,
} from "@/app/_core/models/models";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_core/components/ui/card";
import { Separator } from "@/app/_core/components/ui/separator";
import { Button } from "@/app/_core/components/ui/button";
import { CNPJInput } from "@/app/contract/_components/input-cnpj-field";

interface CreateContractFormProps {
  description?: string;
  onSubmit: (data: ContractFormFields) => void;
  isSubmitting: boolean;
}

export function CreateContractForm({
  description = "",
  onSubmit: onFinalSubmit,
  isSubmitting,
}: CreateContractFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ContractFormFields>({
    resolver: zodResolver(contractFormFieldsSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Preencha os dados do contratante e do(a) contratado(a)
        </CardTitle>
        <CardDescription className="my-2 text-xl">
          {description}
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-8 pt-8">
        <form
          onSubmit={handleSubmit(onFinalSubmit, (formErrors) => {
            console.error("Erros no formulário:", formErrors);
          })}
          className="space-y-8"
        >
          <InputField
            label="Título do Contrato"
            id="title"
            type="text"
            register={register}
            error={errors.title}
          />
          <Section title="Dados do Contratado (Civil)">
            <InputField
              label="Nome"
              id="personContractorName"
              register={register}
              error={errors.personContractorName}
            />
            <CPFInput
              label="CPF"
              id="personContractorCPF"
              value={watch("personContractorCPF") || ""}
              onChange={(value) => setValue("personContractorCPF", value)}
              error={errors.personContractorCPF?.message}
            />
            <InputPhoneField
              id="personContractorPhone"
              label="Telefone"
              register={register("personContractorPhone")}
              error={errors.personContractorPhone}
            />
            <InputField
              label="Email"
              id="personContractorEmail"
              type="email"
              register={register}
              error={errors.personContractorEmail}
            />
            <InputField
              label="Estado Civil"
              id="personContractorCivilStatus"
              register={register}
              error={errors.personContractorCivilStatus}
            />
            <InputField
              label="Profissão"
              id="personContractorProfession"
              register={register}
              error={errors.personContractorProfession}
            />
            <InputField
              label="RG"
              id="personContractorRG"
              register={register}
              error={errors.personContractorRG}
            />
            <InputField
              label="Endereço"
              id="personContractorCEP"
              register={register}
              error={errors.personContractorCEP}
            />
          </Section>
          <Section title="Dados da Contrante (Empresa)">
            <InputField
              label="Nome da Empresa"
              id="companyContractorName"
              register={register}
              error={errors.companyContractorName}
            />
            <InputField
              label="Nome do Sócio Administrador"
              id="companyContractorPersonName"
              register={register}
              error={errors.companyContractorPersonName}
            />
            <CPFInput
              label="CPF do Sócio Administrador"
              id="companyContractorCPF"
              value={watch("companyContractorCPF") || ""}
              onChange={(value) => setValue("companyContractorCPF", value)}
              error={errors.companyContractorCPF?.message}
            />
            <CNPJInput
              label="CNPJ "
              id="companyContractorCNPJ"
              value={watch("companyContractorCNPJ") || ""}
              onChange={(value) => setValue("companyContractorCNPJ", value)}
              error={errors.companyContractorCNPJ?.message}
            />
            <InputPhoneField
              id="companyContractorPhone"
              label="Telefone"
              register={register("companyContractorPhone")}
              error={errors.companyContractorPhone}
            />
            <InputField
              label="Email"
              id="companyContractorEmail"
              type="email"
              register={register}
              error={errors.companyContractorEmail}
            />
          </Section>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Criando contrato..." : "Criar contrato"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid gap-4">{children}</div>
      <Separator />
    </div>
  );
}
