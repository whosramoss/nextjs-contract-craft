import { Button } from "@/app/_core/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "../../_core/components/fade-in";

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <FadeIn.Root>
          <FadeIn.Item delay={0.5} duration={1.5}>
            <h1 className="my-8 bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-5xl  font-bold text-transparent sm:text-5xl md:text-6xl lg:text-[10vw] ">
              Contract Craft
            </h1>
            <p className="mx-auto max-w-[48rem] text-sm leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Este projeto gera arquivos contratos automaticamente a partir do
              input de dados fornecido pelo usuário. Ele permite transformar
              informações estruturadas — como textos, números ou listas — em
              documentos PDF bem formatados, com layout personalizável e seções
              dinâmicas.
            </p>
          </FadeIn.Item>
        </FadeIn.Root>
      </div>
      <FadeIn.Root>
        <FadeIn.Item delay={0.5} duration={1.5}>
          <div className="flex gap-4">
            <Link href={"/contract"}>
              <Button size="lg">
                Acessar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn.Item>
      </FadeIn.Root>
    </section>
  );
}
