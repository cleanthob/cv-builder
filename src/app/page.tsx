import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-tl from-muted via-background to-muted p-6 md:p-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full max-w-[520px] flex-col items-center text-center md:items-start md:text-left">
          <Logo className="mb-8 w-full max-w-[100px]" />

          <h1 className="max-w-[500px] font-title text-5xl font-bold leading-tight">
            Um criador de currículos simples, rápido e gratuito.
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Comece a criar seu currículo agora mesmo, de forma gratuita e sem
            complicações.
          </p>

          <Link href="/dashboard/resumes" passHref>
            <Button className="mt-4">Começar agora</Button>
          </Link>
        </div>

        <div className="w-full max-w-[700px]">
          <div className="overflow-hidden rounded-[20px] border border-border bg-background shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/dashboard.png"
              alt="Imagem do painel do CvBuilder"
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
