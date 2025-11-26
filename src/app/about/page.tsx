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
          Qué es <Logo size="lg" className="inline-block align-baseline" />
        </h1>
        <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
          <Logo size="sm" className="inline-block align-baseline" /> es un SaaS español
          que automatiza la generación de informes de marketing digital para agencias,
          consultores y freelancers. Conecta de forma segura GA4, Google Ads, Meta Ads
          y Search Console para producir informes mensuales en español con análisis claros,
          métricas unificadas y recomendaciones accionables.
        </p>
      </header>

      <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-6 text-sm text-neutral-700 space-y-3">
        <p>
          La plataforma está diseñada para que cualquier profesional pueda ofrecer informes consistentes,
          precisos y listos para entregar sin invertir horas en análisis manual.
        </p>
        <p>
          Aquí presentamos los fundamentos del sistema, la filosofía del producto y las capacidades
          principales que definen a <Logo size="xs" className="inline-block align-baseline" /> como una solución fiable, rápida y escalable
          para el reporting digital.
        </p>
      </div>
    </div>
  );
}
