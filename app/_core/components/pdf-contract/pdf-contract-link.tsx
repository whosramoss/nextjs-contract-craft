"use client";

import dynamic from "next/dynamic";
import PdfModel from "./_config/pdf-model";
import { useCreateContractStore } from "@/app/_core/store/use-create-contract-store";
import { Button } from "@/app/_core/components/ui/button";

const PDFDownloadLink = dynamic(
  () => import("./_config/pdf-exports").then((e) => e.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

export default function PdfContractLink() {
  const { contract } = useCreateContractStore();

  if (!contract || !contract.formFields) {
    return <div>Contrato indisponivel no momento</div>;
  }

  return (
    <PDFDownloadLink
      document={<PdfModel contract={contract.formFields} />}
      fileName="contrato.pdf"
    >
      <Button type="submit" className="w-full">
        Download PDF
      </Button>
    </PDFDownloadLink>
  );
}
