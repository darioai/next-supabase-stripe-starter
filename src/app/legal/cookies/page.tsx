// 🚨 Modified function
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
          Política de cookies
        </h1>

        <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
          Esta Política de Cookies explica cómo {' '}
          <Logo size="sm" className="inline-block align-baseline" /> utiliza cookies y
          tecnologías similares para ofrecer un funcionamiento seguro y eficaz
          de la plataforma.
        </p>
      </header>

      <div className="prose prose-neutral max-w-none rounded-2xl border border-neutral-300 bg-neutral-50 p-6 text-neutral-700 text-sm md:text-base space-y-6">
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos que se almacenan en tu dispositivo
          al navegar por un sitio web. Permiten recordar preferencias, mejorar
          la experiencia de uso y garantizar la seguridad de la plataforma.
        </p>

        <h2>2. Tipos de cookies que utilizamos</h2>
        <h3>2.1. Cookies técnicas o necesarias</h3>
        <p>
          Son esenciales para el funcionamiento de la plataforma. Permiten
          gestionar la sesión, mantener la seguridad y habilitar funciones
          básicas del servicio. No requieren consentimiento.
        </p>

        <h3>2.2. Cookies de análisis (opcionales)</h3>
        <p>
          Se utilizan para obtener información agregada sobre el uso del sitio
          o rendimiento técnico. Solo se activan si otorgas tu consentimiento.
        </p>

        <h3>2.3. Cookies de funcionalidad (opcionales)</h3>
        <p>
          Permiten recordar configuraciones personalizadas y mejorar la experiencia,
          como preferencias de idioma o ajustes de interfaz.
        </p>

        <h2>3. Base legal</h2>
        <p>
          Las cookies necesarias se activan por interés legítimo (seguridad y
          funcionamiento).  
          Las cookies analíticas y de funcionalidad requieren tu consentimiento
          previo conforme al RGPD y la normativa española de servicios digitales.
        </p>

        <h2>4. Cómo gestionar o desactivar las cookies</h2>
        <p>
          Puedes configurar tu navegador para aceptar, bloquear o eliminar
          cookies. Cada navegador ofrece opciones específicas de gestión:
        </p>
        <ul>
          <li>Chrome</li>
          <li>Firefox</li>
          <li>Safari</li>
          <li>Edge</li>
        </ul>
        <p>
          Ten en cuenta que desactivar ciertas cookies puede afectar al
          funcionamiento correcto de la plataforma.
        </p>

        <h2>5. Servicios de terceros</h2>
        <p>
          Algunos proveedores externos pueden instalar cookies cuando interactúas
          con ciertos componentes de la plataforma (p. ej., servicios de hosting
          o analítica). Estos proveedores cumplen con las garantías del RGPD.
        </p>

        <h2>6. Actualizaciones de la política</h2>
        <p>
          Esta política puede actualizarse para cumplir con cambios legales o
          mejoras del servicio. La versión vigente estará siempre disponible en
          esta página.
        </p>

        <h2>7. Contacto</h2>
        <p>
          Para consultas relacionadas con cookies o privacidad:<br />
          <strong>suscripciones@datahora.es</strong>
        </p>
      </div>

      <p className="text-xs text-neutral-500">
        Última actualización: 26 de noviembre de 2025
      </p>
    </div>
  );
}
