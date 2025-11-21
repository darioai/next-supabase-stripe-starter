// MODIFIED: PricingSection
import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function PricingSection({ isPricingPage }: { isPricingPage?: boolean }) {
  return (
    <section
      className={`container mx-auto px-6 ${
        isPricingPage ? "py-10 md:py-16" : "py-8 md:py-12"
      } space-y-10`}
    >
      {/* ENCABEZADO */}
      <header className="space-y-3 text-center max-w-3xl mx-auto">
        <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
          Precios
        </p>

        {isPricingPage ? (
          <h1 className="text-3xl md:text-4xl font-semibold text-primary bg-transparent">
            Planes diseñados para agencias y freelancers
          </h1>
        ) : (
          <h2 className="text-3xl md:text-4xl font-semibold text-primary !bg-none !bg-clip-border !text-primary">
            Planes diseñados para agencias y freelancers
          </h2>
        )}

        <p className="text-sm md:text-base text-neutral-600">
          Empieza con un solo cliente y escala hasta una cartera completa sin
          perder horas cada mes preparando informes.
        </p>
      </header>

      {/* TARJETAS DE PRECIOS */}
      <section className="grid gap-8 md:grid-cols-3">
        {/* Plan Básico */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm flex flex-col">
          <h3 className="text-xl font-semibold text-neutral-900">Básico</h3>
          <p className="mt-1 text-sm text-neutral-500">
            Para freelancers con pocos clientes.
          </p>

          <p className="mt-6 text-4xl font-bold text-neutral-900">
            19 €{" "}
            <span className="text-sm font-normal text-neutral-500">/ mes</span>
          </p>

          <ul className="mt-6 space-y-2 text-sm text-neutral-600 flex-1 leading-relaxed">
            <li>1 cliente incluido</li>
            <li>GA4 + Meta Ads</li>
            <li>Informe mensual en español (PDF + enlace)</li>
            <li>Resumen ejecutivo y recomendaciones básicas</li>
          </ul>

          <Button
            asChild
            className="mt-8 w-full bg-primary text-white hover:bg-secondary/90 rounded-xl"
          >
            <Link href="/signup">Empezar con Básico</Link>
          </Button>
        </div>

        {/* Plan Profesional (destacado) */}
        <div className="rounded-2xl border border-primary bg-white p-8 shadow-xl flex flex-col scale-[1.02]">
          <p className="text-xs font-bold text-secondary uppercase tracking-wide mb-2">
            Más popular
          </p>
          <h3 className="text-xl font-semibold text-neutral-900">Profesional</h3>
          <p className="mt-1 text-sm text-neutral-500">
            Para pequeñas agencias con varias cuentas.
          </p>

          <p className="mt-6 text-4xl font-bold text-neutral-900">
            39 €{" "}
            <span className="text-sm font-normal text-neutral-500">/ mes</span>
          </p>

          <ul className="mt-6 space-y-2 text-sm text-neutral-600 flex-1 leading-relaxed">
            <li>Hasta 5 clientes</li>
            <li>GA4 + Meta Ads + Google Ads + Search Console</li>
            <li>Informe mensual en español (PDF + enlace)</li>
            <li>Alertas básicas y seguimiento de variaciones</li>
            <li>Histórico de informes</li>
          </ul>

          <Button
            asChild
            className="mt-8 w-full bg-secondary text-white hover:bg-primary/90 rounded-xl"
          >
            <Link href="/signup">Elegir Profesional</Link>
          </Button>
        </div>

        {/* Plan Agencia */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm flex flex-col">
          <h3 className="text-xl font-semibold text-neutral-900">Agencia</h3>
          <p className="mt-1 text-sm text-neutral-500">
            Para agencias que gestionan muchas cuentas.
          </p>

          <p className="mt-6 text-4xl font-bold text-neutral-900">
            79 €{" "}
            <span className="text-sm font-normal text-neutral-500">/ mes</span>
          </p>

          <ul className="mt-6 space-y-2 text-sm text-neutral-600 flex-1 leading-relaxed">
            <li>Hasta 20 clientes</li>
            <li>Todo lo del plan Profesional</li>
            <li>Multiusuario (equipo)</li>
            <li>Informes personalizados por cliente</li>
            <li>Integración con Drive / carpeta compartida</li>
          </ul>

          <Button
            asChild
            className="mt-8 w-full bg-primary text-white hover:bg-secondary/90 rounded-xl"
          >
            <Link href="/signup">Hablar sobre Agencia</Link>
          </Button>
        </div>
      </section>

      <p className="text-xs text-neutral-500 text-center max-w-xl mx-auto">
        Los precios y características pueden ajustarse durante la fase beta de{" "}
        <Logo size="xs" className="inline-block align-baseline" />.
      </p>
    </section>
  );
}
