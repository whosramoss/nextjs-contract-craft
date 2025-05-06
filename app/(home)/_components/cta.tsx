import { Button } from "@/app/_core/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section>
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          Simples, Automático, Ágil
        </h2>
        <p className="max-w-[48rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          A ferramenta oferece flexibilidade para lidar com diferentes tipos de
          dados e suporta a criação de templates adaptáveis, tornando possível
          gerar desde relatórios simples até documentos mais complexos, como
          contratos, certificados e faturas.
        </p>
        <Button size="lg" className="mt-4">
          <Link href={"/contract"}>Começe a utilizar hoje!</Link>
        </Button>
      </div>
    </section>
  );
}
