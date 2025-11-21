// src/app/legal/privacy/page.tsx
import { Logo } from '@/components/logo';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-primary">
        Política de privacidad (versión provisional)
      </h1>
      <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
        Esta página es un placeholder temporal. La política de privacidad legal
        y completa se añadirá antes del lanzamiento público de la versión
        comercial.
      </p>
      <p className="text-xs text-neutral-500">
        Si estás viendo esta página es porque{' '}
        <Logo size="xxs" className="inline-block align-baseline" />{' '} aún se encuentra en fase
        beta interna.
      </p>
    </div>
  );
}
