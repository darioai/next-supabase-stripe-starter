// src/app/about/page.tsx
import { Logo } from "@/components/logo";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
          Sobre la herramienta
        </p>
        <h1 className="text-3xl font-semibold text-primary">
          Qué es <Logo size="md" className="inline-block align-baseline" />
        </h1>
        <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
          <Logo size="sm" className="inline-block align-baseline" /> es un SaaS
          español que automatiza informes de marketing digital para agencias y
          freelancers. Conecta GA4, Google Ads, Meta Ads y Search Console para
          generar informes mensuales en español con resúmenes claros y acciones
          concretas.
        </p>
      </header>

      <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-6 text-sm text-neutral-700 space-y-3">
        <p>
          Esta página está en construcción. La versión final incluirá más
          detalles sobre la visión del producto, el roadmap y la empresa detrás
          del proyecto.
        </p>
        <p>
          De momento, sirve como página informativa provisional para la fase
          beta y para que todos los enlaces del sitio funcionen correctamente.
        </p>
      </div>
    </div>
  );
}
