import { FadeIn } from "@/app/_core/components/fade-in";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12 ">
        <FadeIn.Root>
          <FadeIn.Item delay={0.5} duration={1.5}>
            <div className="flex-1 space-y-4">
              <h2 className="font-bold">Contract Craft</h2>
              <p className="text-sm text-muted-foreground">
              Feito para transformar seus dados em PDFs,<br/> sem complicação.
              </p>
            </div>
          </FadeIn.Item>
        </FadeIn.Root>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-2">
          <FadeIn.Root>
            <FadeIn.Item delay={0.5} duration={1.5}>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Empresa</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      Contribuição
                    </Link>
                  </li>
                </ul>
              </div>
            </FadeIn.Item>
          </FadeIn.Root>
          <FadeIn.Root>
            <FadeIn.Item delay={0.5} duration={1.5}>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Contato</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      WhatsApp
                    </Link>
                  </li>
                </ul>
              </div>
            </FadeIn.Item>
          </FadeIn.Root>
        </div>
      </div>
      <FadeIn.Root>
        <FadeIn.Item delay={0.5} duration={1.5}>
          <div className="container border-t py-6">
            <p className="text-center text-sm text-muted-foreground">
              © Todos os direitos reservados.{new Date().getFullYear()}
            </p>
          </div>
        </FadeIn.Item>
      </FadeIn.Root>
    </footer>
  );
}
