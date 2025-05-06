'use client';

import { useState } from "react";
import { ContractFormFields } from "@/app/_core/models/models";
import {
  FileText} from "lucide-react";
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
  const { contract, setContract } =  useCreateContractStore()
  
  const createFilebyBlob = async () => {
    try {
      if(!contract?.formFields) return;
      const pdfBlob = await pdf(<PdfModel  contract={contract.formFields} /> ).toBlob();
      const file = new File([pdfBlob], `contract.pdf`);
      const filePath = `contracts/${file.name}`;
      console.log(filePath, file)
      setCreateContract(true)
    } catch (err) {
      console.error(err);
      setError('Failed to create contract');
    } finally {
      setIsSubmittingContract(false);
    }
  }

  
  const handleCreateContract = async (formFields: ContractFormFields) => {
    setContract({ formFields: formFields });
    setIsSubmittingContract(true);
    await createFilebyBlob()
  };



  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-10">
      <div className="bg-background  rounded-xl shadow-md p-6 space-y-6">
      {
        createContract 
          ?  <ContractCreatedSection />
          : (<CreateContractForm
              isSubmitting={isSubmittingContract}
              onSubmit={handleCreateContract}
            />)
          
        }
      </div>

    </div>
  );
}



function ContractCreatedSection() {
  const { contract } =  useCreateContractStore()
  return (
    
    <div className="space-y-6 ">
      <div className="bg-background border p-4 rounded-lg">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5" /> Contrato: "{contract?.formFields?.title.toUpperCase()}"
        </h2>
        <div className="space-y-2">
          <PdfContractLink  />  
          <PdfContractModel />
        </div>
      </div>
    </div>
  );
}
