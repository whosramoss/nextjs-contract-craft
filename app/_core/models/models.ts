import { isValidCPF } from "@/app/_core/lib/utils";
import * as z from "zod";

const rgRegex = /^[0-9a-zA-Z]{5,14}$/;

export const contractFormFieldsSchema = z.object({
  title: z.string().min(3, "Titulo obrigatório"),
  personContractorName: z.string().min(3, "Nome obrigatório"),
  personContractorCPF: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => isValidCPF(val), { message: "CPF inválido" }),
  personContractorPhone: z.string().refine(
    (value) => {
      const digitsOnly = value.replace(/\D/g, "");
      return digitsOnly.length === 10 || digitsOnly.length === 11;
    },
    {
      message: "Telefone deve conter 8 ou 9 dígitos numéricos",
    },
  ),
  personContractorEmail: z.string().email("Email inválido"),
  personContractorCivilStatus: z.string().min(3, "Campo obrigatório"),
  personContractorProfession: z.string().min(3, "Campo obrigatório"),
  personContractorRG: z
    .string()
    .regex(rgRegex, "RG deve conter entre 5 e 14 caracteres alfanuméricos"),
  personContractorCEP: z.string().min(5, "Endereço obrigatório"),

  companyContractorName: z.string().min(3, "Nome da empresa obrigatório"),
  companyContractorPersonName: z.string().min(3, "Nome do sócio obrigatório"),
  companyContractorCPF: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => isValidCPF(val), { message: "CPF inválido" }),
  companyContractorCNPJ: z.string().min(3, "CNPJ obrigatório"),
  companyContractorPhone: z.string().refine(
    (value) => {
      const digitsOnly = value.replace(/\D/g, "");
      return digitsOnly.length === 10 || digitsOnly.length === 11;
    },
    {
      message: "Telefone deve conter 8 ou 9 dígitos numéricos",
    },
  ),
  companyContractorEmail: z.string().email("Email inválido"),
});

export type ContractFormFields = z.infer<typeof contractFormFieldsSchema>;

export interface ContractInfo {
  originalContractUrl?: string;
  signedContractUrl?: string;
  filePath?: string;
  signedFilePath?: string;
  signedAt?: string;
  signedByUserId?: string;
  dates?: string[];
  status?: "pending" | "signed" | "cancelled" | "contract_created";
  formFields?: ContractFormFields;
}
