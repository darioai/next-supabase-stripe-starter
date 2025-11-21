// src/app/demo-report/page.tsx
import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function DemoReportPage() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-10">
      {/* Encabezado */}
      <header className="space-y-3">
        <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
          Informe de ejemplo
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-primary">
          Así se ve un informe generado por{" "}
          <Logo size="xl" className="inline-block align-baseline" />
        </h1>
        <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
          Esta es una muestra simplificada de un informe mensual:
          resumen ejecutivo, acciones recomendadas y métricas clave para que
          tus clientes entiendan qué pasó y qué hacer a continuación.
        </p>
      </header>

      {/* Resumen ejecutivo */}
      <section className="grid gap-6 lg:grid-cols-[2fr,1.2fr] items-start">
        <div className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900">
            1. Resumen ejecutivo — Qué pasó y por qué
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            En septiembre, el tráfico total aumentó un{" "}
            <span className="font-semibold">11,8 %</span> respecto al mes
            anterior, impulsado por nuevas campañas de Meta Ads y el crecimiento
            orgánico en Google.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Sin embargo, las conversiones bajaron un{" "}
            <span className="font-semibold">8 %</span>, principalmente por una
            caída de la tasa de conversión en móvil y un incremento del{" "}
            <span className="font-semibold">CPA</span> medio en campañas de
            búsqueda.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            La mayor parte del presupuesto se concentró en campañas de
            prospecting con un ROAS de{" "}
            <span className="font-semibold">2,4x</span>, mientras que
            retargeting mantuvo un rendimiento estable con un ROAS de{" "}
            <span className="font-semibold">3,1x</span>.
          </p>
        </div>

        {/* Tarjeta de KPIs rápidos (simulada) */}
        <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-neutral-900">
            KPIs clave del período
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-[#F5F6FB] p-3">
              <p className="text-xs text-neutral-500">Tráfico web</p>
              <p className="mt-1 text-xl font-semibold text-[#2ECC71]">
                +11,8 %
              </p>
            </div>
            <div className="rounded-xl bg-[#FFF5F3] p-3">
              <p className="text-xs text-neutral-500">Conversiones</p>
              <p className="mt-1 text-xl font-semibold text-[#E74C3C]">
                -8,0 %
              </p>
            </div>
            <div className="rounded-xl bg-[#F5F6FB] p-3">
              <p className="text-xs text-neutral-500">CPA medio</p>
              <p className="mt-1 text-xl font-semibold text-[#E67E22]">
                +16,6 %
              </p>
            </div>
            <div className="rounded-xl bg-[#F5F6FB] p-3">
              <p className="text-xs text-neutral-500">ROAS global</p>
              <p className="mt-1 text-xl font-semibold text-primary">2,7x</p>
            </div>
          </div>
          <p className="text-xs text-neutral-500">
            Datos de ejemplo basados en un e-commerce real, generados
            automáticamente a partir de GA4, Google Ads, Meta Ads y Search
            Console.
          </p>
        </div>
      </section>

      {/* Acciones recomendadas */}
      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-neutral-900">
          2. Acciones recomendadas (priorizadas)
        </h2>
        <ul className="space-y-3 text-sm text-neutral-700">
          <li>
            <span className="inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700 mr-2">
              ALTA
            </span>
            Reducir pujas un 25 % en keywords con CPA &gt; 2× la media para
            recuperar eficiencia en búsqueda.
          </li>
          <li>
            <span className="inline-block rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700 mr-2">
              MEDIA
            </span>
            Aumentar un 10 % el presupuesto en retargeting de Meta Ads, donde el
            CTR y el ROAS son más sólidos.
          </li>
          <li>
            <span className="inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 mr-2">
              BAJA
            </span>
            Probar nuevos creativos verticales en móvil para mejorar el CTR en
            el canal que concentra la mayoría del tráfico.
          </li>
        </ul>
      </section>

      {/* Cierre + CTA */}
      <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-5">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-neutral-900">
            Esto es solo una muestra.
          </p>
          <p className="text-xs md:text-sm text-neutral-600 max-w-xl">
            En la versión real,{" "}
            <Logo size="xs" className="inline-block align-baseline" /> genera
            el PDF completo, el enlace web y envía el informe automáticamente a
            tus clientes cada mes.
          </p>
        </div>

        <div className="flex gap-3">
          <Button asChild className="rounded-xl bg-secondary text-white hover:bg-secondary/90 text-sm px-5">
            <Link href="/signup">Quiero probarlo</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-xl text-sm border-neutral-300"
          >
            <Link href="/">Volver a inicio</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
