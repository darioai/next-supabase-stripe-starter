// src/app/legal/cookies/page.tsx
import { Logo } from '@/components/logo';


export default function CookiesPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
          Legal
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold text-primary">
          Política de cookies (versión provisional)
        </h1>

        <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
          Esta es una versión temporal de la política de cookies de {' '}
         <Logo size="sm" className="inline-block align-baseline" />.
          La versión completa y definitiva se publicará antes del lanzamiento
          oficial del producto.
        </p>
      </header>

      <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-6 text-neutral-700 space-y-4 text-sm">
        <p>
          En la versión final se explicará qué tipos de cookies utilizamos (por
          ejemplo, esenciales, analíticas y de funcionalidad), con qué
          propósito se usan y durante cuánto tiempo se almacenan en tu navegador.
        </p>

        <p>
          También se detallará cómo puedes gestionar o desactivar las cookies
          desde tu navegador y qué impacto puede tener eso en el funcionamiento
          de la aplicación.
        </p>

        <p>
          datahora está siendo diseñada para cumplir con la normativa europea
          aplicable al uso de cookies y tecnologías similares, incluyendo el
          RGPD y la normativa española de servicios de la sociedad de la
          información.
        </p>
      </div>

      <p className="text-xs text-neutral-500">
        Última actualización provisional: {new Date().getFullYear()}
      </p>
    </div>
  );
}
