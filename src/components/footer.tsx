// 🔧 Modified function
// src/components/footer.tsx (o ruta equivalente)

import Link from "next/link";

import { Logo } from "@/components/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 px-6 py-4 text-sm text-neutral-500">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

        {/* Logo + claim */}
        <div className="space-y-2">
          <Logo size="md" />
          <p className="max-w-xs text-xs text-neutral-500 leading-relaxed">
            Informes de marketing y rendimiento digital en español para agencias y freelancers.
          </p>
        </div>

        {/* Link columns */}
        <div className="flex gap-16 text-xs md:text-sm">

          <div className="space-y-2">
            <p className="font-semibold text-neutral-700">Producto</p>
            <ul className="space-y-1">
              <li>
                <Link href="/pricing" className="hover:text-primary transition">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/demo-report" className="hover:text-primary transition">
                  Informe de ejemplo
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-neutral-700">Empresa</p>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  Sobre datahora
                </Link>
              </li>
              <li>
                <Link href="/legal/legal-notice" className="hover:text-primary transition">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-primary transition">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-primary transition">
                  Términos de uso
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-primary transition">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 border-t border-neutral-200 pt-4 text-center text-xs text-neutral-400">
        © {year} datahora. Todos los derechos reservados.
      </div>
    </footer>
  );
}
