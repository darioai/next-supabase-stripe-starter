import Link from 'next/link';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#F2F2F2]">
      {/* HERO PRINCIPAL */}
      <section className="container mx-auto pt-8 md:pt-12 pb-16">
        <div className="grid gap-12 md:grid-cols-2 items-center rounded-3xl bg-gradient-to-br from-white via-[#F5F6FB] to-[#EDEFFF] px-8 py-10 shadow-sm">
          {/* Columna de texto */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-6">
              Para agencias de marketing digital y freelancers de rendimiento.
            </p>

            <Logo size="lg" className="text-5xl md:text-6xl" />

          <p className="text-lg text-neutral-600 leading-relaxed">
            <span className="block mb-1">
              Informes en español listos ahora.
            </span>

            <span className="block">
              Conecta tus cuentas, deja que{' '}
              <Logo size="sm" className="inline-block align-baseline" />{' '}
              analice tu tráfico y tus campañas, y obtén reportes profesionales en cuestión de segundos.
            </span>
          </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* CTA principal */}
              <Button
                size="lg"
                asChild
                className="px-8 rounded-xl bg-secondary text-white hover:bg-secondary/90 font-semibold shadow-sm"
              >
                <Link href="/signup">Solicitar acceso anticipado</Link>
              </Button>


              {/* Botón secundario */}
              <Button
                size="lg"
                asChild
                className="px-8 rounded-xl bg-neutral-300 text-neutral-700 hover:bg-neutral-200 font-medium shadow-sm transition"
              >
                <Link href="/demo-report">Ver informe de ejemplo</Link>
              </Button>
            </div>

            <p className="text-xs text-neutral-500">
              Sin tarjeta durante la prueba. Diseñado para el mercado español.
            </p>
          </div>
          {/* Columna visual derecha */}
          <div className="relative">
            <div className="rounded-3xl p-8 shadow-2xl text-white 
                bg-gradient-to-b from-[#1B1E2D] via-[#24283B] to-[#3A3F55]">


              <p className="text-sm font-semibold text-[#B9C0FF] mb-3">
                Resumen ejecutivo
              </p>

              <p className="text-[15px] text-gray-200 mb-6 leading-relaxed">
                “El tráfico creció un 11,8 %, pero las conversiones bajaron un 8 % por 
                aumento del CPC y menor conversión en móvil. Recomendamos ajustar pujas 
                y reforzar retargeting.”
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                {/* Tráfico Web */}
                <div className="rounded-2xl bg-[#0F111A] border border-white/15 p-4">
                  <p className="text-xs text-gray-400">Tráfico web</p>
                  <p className="mt-2 text-2xl font-semibold text-[#2ECC71]">
                    +11,8 %
                  </p>
                </div>

                {/* Conversiones */}
                <div className="rounded-2xl bg-[#0F111A] border border-white/15 p-4">
                  <p className="text-xs text-gray-400">Conversiones</p>
                  <p className="mt-2 text-2xl font-semibold text-[#E74C3C]">
                    -8,0 %
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[11px] text-gray-300">
                Indicadores generados a partir de métricas reales, fórmulas de {' '}
              <Logo size="xxs" className="inline-block align-baseline" />{' '}
                y análisis asistido por IA.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: Cómo funciona */}
      <section className="container mx-auto py-12 md:py-20 space-y-8">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Cómo funciona <Logo size="lg" className="inline-block align-baseline" /> 
          </h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-2xl md:max-w-none">
            Pensado para agencias de marketing digital y freelancers de rendimiento que necesitan
            explicar el tráfico y las campañas a sus clientes sin perder horas cada mes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Paso 1 */}
          <div className="rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-sm">
            <p className="text-xs font-bold text-secondary uppercase tracking-wide mb-2">
              Paso 1
            </p>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Conecta tus cuentas
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Vincula GA4, Google Ads, Meta Ads y Search Console. <Logo size="xs" className="inline-block align-baseline" /> unifica las métricas
              clave de tráfico y campañas en un solo lugar.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-sm">
            <p className="text-xs font-bold text-secondary uppercase tracking-wide mb-2">
              Paso 2
            </p>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Analizamos tu rendimiento
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              <Logo size="xs" className="inline-block align-baseline" /> combina fórmulas propias, análisis de variaciones y apoyo de IA
              para detectar tendencias, anomalías y oportunidades en tus cuentas.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-sm">
            <p className="text-xs font-bold text-secondary uppercase tracking-wide mb-2">
              Paso 3
            </p>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Entregas informes listos
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Recibes informes en español con resumen ejecutivo, KPIs y recomendaciones,
              listos para enviar a tus clientes en PDF o como enlace web.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: Precios */}
      <section className="container mx-auto py-16 md:py-20 space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-3xl font-semibold text-primary">
            Planes diseñados  <br />
            para agencias y freelancers
          </h2>
          <p className="text-sm md:text-base text-neutral-600">
            Empieza con un solo cliente y escala hasta una cartera completa sin perder tiempo en informes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Plan Básico */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-neutral-900">Básico</h3>
            <p className="mt-1 text-sm text-neutral-500">Para freelancers con pocos clientes.</p>

            <p className="mt-6 text-4xl font-bold text-neutral-900">
              19 € <span className="text-sm font-normal text-neutral-500">/ mes</span>
            </p>

            <ul className="mt-6 space-y-2 text-sm text-neutral-600 flex-1 leading-relaxed">
              <li>1 cliente incluido</li>
              <li>GA4 + Meta Ads</li>
              <li>Informe mensual en español (PDF + enlace)</li>
              <li>Resumen ejecutivo y recomendaciones básicas</li>
            </ul>

            <Button asChild className="mt-8 w-full bg-primary text-white hover:bg-secondary/90 rounded-xl">
              <Link href="/signup">Empezar con Básico</Link>
            </Button>
          </div>

          {/* Plan Profesional (destacado) */}
          <div className="rounded-2xl border border-primary bg-white p-8 shadow-xl flex flex-col scale-[1.02]">
            <p className="text-xs font-bold text-secondary uppercase tracking-wide mb-2">
              Más popular
            </p>
            <h3 className="text-xl font-semibold text-neutral-900">Profesional</h3>
            <p className="mt-1 text-sm text-neutral-500">Para pequeñas agencias con varias cuentas.</p>

            <p className="mt-6 text-4xl font-bold text-neutral-900">
              39 € <span className="text-sm font-normal text-neutral-500">/ mes</span>
            </p>

            <ul className="mt-6 space-y-2 text-sm text-neutral-600 flex-1 leading-relaxed">
              <li>Hasta 5 clientes</li>
              <li>GA4 + Meta Ads + Google Ads + Search Console</li>
              <li>Informe mensual en español (PDF + enlace)</li>
              <li>Alertas básicas y seguimiento de variaciones</li>
              <li>Histórico de informes</li>
            </ul>

            <Button asChild className="mt-8 w-full bg-secondary text-white hover:bg-primary/90 rounded-xl">
              <Link href="/signup">Elegir Profesional</Link>
            </Button>
          </div>

          {/* Plan Agencia */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-neutral-900">Agencia</h3>
            <p className="mt-1 text-sm text-neutral-500">Para agencias que gestionan muchas cuentas.</p>

            <p className="mt-6 text-4xl font-bold text-neutral-900">
              79 € <span className="text-sm font-normal text-neutral-500">/ mes</span>
            </p>

            <ul className="mt-6 space-y-2 text-sm text-neutral-600 flex-1 leading-relaxed">
              <li>Hasta 20 clientes</li>
              <li>Todo lo del plan Profesional</li>
              <li>Multiusuario (equipo)</li>
              <li>Informes personalizados por cliente</li>
              <li>Integración con Drive / carpeta compartida</li>
            </ul>

          <Button asChild
            className="mt-8 w-full bg-primary text-white hover:bg-secondary/90 rounded-xl">
            <Link href="/signup">Hablar sobre Agencia</Link>
          </Button>
          </div>
        </div>
      </section>


    </main>
  );
}
