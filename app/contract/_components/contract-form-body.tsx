"use client";

import { useState } from "react";
import { ContractFormFields } from "@/app/_core/models/models";
import { FileText } from "lucide-react";
import { CreateContractForm } from "./create-contract-form";
import { pdf } from "@react-pdf/renderer";
import { useCreateContractStore } from "@/app/_core/store/use-create-contract-store";
import PdfModel from "@/app/_core/components/pdf-contract/_config/pdf-model";
import PdfContractLink from "@/app/_core/components/pdf-contract/pdf-contract-link";
import PdfContractModel from "@/app/_core/components/pdf-contract/pdf-contract-model";

export default function ContractFormBody() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmittingContract, setIsSubmittingContract] = useState(false);
  const [createContract, setCreateContract] = useState(false);
  const { contract, setContract } = useCreateContractStore();

  const createFilebyBlob = async () => {
    try {
      if (!contract?.formFields) return;
      const pdfBlob = await pdf(
        <PdfModel contract={contract.formFields} />,
      ).toBlob();
      const file = new File([pdfBlob], `contract.pdf`);
      const filePath = `contracts/${file.name}`;
      console.log(filePath, file);
      setCreateContract(true);
    } catch (err) {
      console.error(err);
      setError("Failed to create contract");
    } finally {
      setIsSubmittingContract(false);
    }
  };

  const handleCreateContract = async (formFields: ContractFormFields) => {
    setContract({ formFields: formFields });
    setIsSubmittingContract(true);
    await createFilebyBlob();
  };

  return (
    <div className="container mx-auto max-w-4xl space-y-10 px-4 py-12">
      <div className="space-y-6  rounded-xl bg-background p-6 shadow-md">
        {createContract ? (
          <ContractCreatedSection />
        ) : (
          <CreateContractForm
            isSubmitting={isSubmittingContract}
            onSubmit={handleCreateContract}
          />
        )}
      </div>
    </div>
  );
}

function ContractCreatedSection() {
  const { contract } = useCreateContractStore();
  return (
    <div className="space-y-6 ">
      <div className="rounded-lg border bg-background p-4">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <FileText className="h-5 w-5" /> Contrato: "
          {contract?.formFields?.title.toUpperCase()}"
        </h2>
        <div className="space-y-2">
          <PdfContractLink />
          <PdfContractModel />
        </div>
      </div>
    </div>
  );
}
