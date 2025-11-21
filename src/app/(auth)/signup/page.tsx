// src/app/signup/page.tsx
import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
          Alta de cuenta
        </p>
        <h1 className="text-3xl font-semibold text-primary">
          Registro en construcción
        </h1>
        <p className="text-sm md:text-base text-neutral-600 max-w-xl">
          Estamos terminando el flujo de alta automática de{" "}
          <Logo size="xs" className="inline-block align-baseline" />.
          Mientras tanto, esta pantalla sirve como placeholder para que los
          botones de la landing funcionen correctamente.
        </p>
      </header>

      <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-6 text-sm text-neutral-700 space-y-3">
        <p>
          La versión pública aún no está abierta, pero puedes seguir navegando
          por la demo, ver el informe de ejemplo y consultar los planes de
          precios.
        </p>
        <p>
          Si estás viendo esta página es porque la aplicación está en fase beta.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild className="rounded-xl bg-secondary text-white hover:bg-secondary/90 text-sm px-5">
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="rounded-xl text-sm border-neutral-300"
        >
          <Link href="/demo-report">Ver informe de ejemplo</Link>
        </Button>
      </div>
    </div>
  );
}
