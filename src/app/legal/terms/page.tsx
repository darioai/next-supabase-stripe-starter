// src/app/legal/terms/page.tsx
import { Logo } from '@/components/logo';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
          Legal
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold text-primary">
          Términos de uso (versión provisional)
        </h1>

        <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
          Estos términos de uso están en construcción. La versión final se
          publicará antes del lanzamiento oficial de{" "}
          <Logo size="xs" className="inline-block align-baseline" />.
        </p>
      </header>

      <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-6 text-neutral-700 space-y-4 text-sm">
        <p>
          Esta página es un placeholder temporal. En la versión completa se
          incluirán las condiciones de uso del servicio, obligaciones del
          usuario, responsabilidades, límites legales y la política de acceso a
          funciones premium.
        </p>

        <p>
          Todos los documentos legales (Términos, Privacidad, Cookies) se
          actualizarán conforme a la normativa española y europea (RGPD).
        </p>
      </div>

      <p className="text-xs text-neutral-500">
        Última actualización provisional: {new Date().getFullYear()}
      </p>
    </div>
  );
}
