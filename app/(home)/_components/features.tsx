import { FadeIn } from "@/app/_core/components/fade-in";
import { Brain, Cloud, Shield, Zap, ArrowUpWideNarrow } from "lucide-react";

const features = [
  {
    name: "Geração automática de PDFs a partir de dados do usuário",
    description:
      "O sistema transforma automaticamente os dados enviados pelo usuário — como textos, tabelas, listas ou valores numéricos — em um arquivo PDF pronto para uso. Isso elimina a necessidade de montar documentos manualmente, garantindo agilidade e consistência no resultado final.",
    icon: Zap,
  },
  {
    name: "Personalização do conteúdo e do layout",
    description:
      "É possível ajustar livremente o conteúdo e a aparência dos PDFs gerados, incluindo cores, fontes, logotipos, posicionamento de elementos e estilos de texto. Essa personalização permite criar documentos alinhados à identidade visual desejada e adequados a diferentes contextos de uso.",
    icon: Shield,
  },
  {
    name: "Suporte a múltiplos templates e formatos",
    description:
      "O projeto oferece suporte para trabalhar com diferentes templates de documentos, adaptando-se a necessidades variadas — como relatórios, contratos, certificados ou faturas. Cada template pode conter regras específicas para exibir ou ocultar seções conforme os dados recebidos.",
    icon: ArrowUpWideNarrow,
  },
  {
    name: "Redução de esforço manual na criação de documentos",
    description:
      "Ao automatizar o processo de montagem dos PDFs, o sistema reduz significativamente o tempo gasto com tarefas repetitivas e o risco de erros manuais. Isso aumenta a produtividade e libera os usuários para se concentrarem em atividades mais estratégicas.",
    icon: Brain,
  },
];

export default function Features() {
  return (
    <section className="container space-y-2 py-2 ">
      <FadeIn.Root>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <FadeIn.Item key={feature.name} delay={0.5} duration={1.5}>
              <div className="relative overflow-hidden rounded-lg border bg-background p-8">
                <div className="flex items-center gap-4">
                  <feature.icon className="h-8 w-8" />
                  <h3 className="font-bold">{feature.name}</h3>
                </div>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </FadeIn.Item>
          ))}
        </div>
      </FadeIn.Root>
    </section>
  );
}
