"use client";

import dynamic from "next/dynamic";
import PdfModel from "./_config/pdf-model";
import { useCreateContractStore } from "@/app/_core/store/use-create-contract-store";

const PDFViewer = dynamic(
  () => import("./_config/pdf-exports").then((e) => e.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

export default function PdfContractModel() {
  const { contract } = useCreateContractStore();

  if (!contract || !contract.formFields) {
    return <div>Contrato indisponivel no momento</div>;
  }

  return (
    <div className="mx-auto my-10 max-w-2xl">
      <div className="h-[500px] w-full">
        <PDFViewer width="100%" height="100%">
          <PdfModel contract={contract.formFields} />
        </PDFViewer>
      </div>
    </div>
  );
}
