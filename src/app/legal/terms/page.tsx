// 🚨 Modified function
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
          Términos de uso
        </h1>

        <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
          Estos Términos de Uso regulan el acceso y la utilización de{' '}
          <Logo size="sm" className="inline-block align-baseline" /> y de todos los servicios
          ofrecidos a través de la plataforma.
        </p>
      </header>

      <div className="prose prose-neutral max-w-none rounded-2xl border border-neutral-300 bg-neutral-50 p-6 text-neutral-700 text-sm md:text-base space-y-6">
        <h2>1. Aceptación de los términos</h2>
        <p>
          Al acceder o utilizar <Logo size="xs" className="inline-block align-baseline" />, el usuario acepta
          plenamente estos Términos de Uso. Si no está de acuerdo, debe dejar de utilizar el servicio.
        </p>

        <h2>2. Descripción del servicio</h2>
        <p>
          <Logo size="xs" className="inline-block align-baseline" /> es una plataforma SaaS que permite generar informes
          automáticos de marketing digital conectando cuentas de GA4, Google Ads, Meta Ads y Search Console.
        </p>

        <h2>3. Registro y acceso</h2>
        <p>
          Para utilizar el servicio, el usuario debe crear una cuenta y proporcionar información veraz y actualizada.
          Es responsable de custodiar sus credenciales y evitar accesos no autorizados.
        </p>

        <h2>4. Integraciones externas</h2>
        <p>
          El usuario puede conectar sus cuentas de terceros (Google, Meta, etc.). Es responsable de revisar y
          otorgar los permisos necesarios. <Logo size="xs" className="inline-block align-baseline" /> solo accederá a los datos estrictamente
          necesarios para generar informes.
        </p>

        <h2>5. Uso permitido</h2>
        <ul>
          <li>No está permitido usar el servicio para actividades ilícitas o que vulneren derechos de terceros.</li>
          <li>No se permite intentar acceder al código fuente, sistemas internos o realizar ingeniería inversa.</li>
          <li>
            El usuario es responsable del contenido y datos que conecte, incluyendo el cumplimiento de los
            términos de uso de las plataformas integradas.
          </li>
        </ul>

        <h2>6. Planes, pagos y facturación</h2>
        <p>
          Los planes de suscripción y sus precios se muestran en la web oficial. Los pagos se gestionan
          a través de Stripe. Las suscripciones se renuevan automáticamente salvo cancelación previa.
        </p>

        <h2>7. Propiedad intelectual</h2>
        <p>
          El software, diseño, textos, gráficos y demás elementos de la plataforma son propiedad de UTA Solutions
          Europa, S.L. Queda prohibida su reproducción, distribución o modificación sin autorización.
        </p>

        <h2>8. Disponibilidad del servicio</h2>
        <p>
          Aunque se realizan esfuerzos razonables para garantizar la disponibilidad del servicio, no se asegura
          un funcionamiento ininterrumpido. La plataforma puede estar temporalmente inactiva por mantenimiento
          o causas fuera de nuestro control.
        </p>

        <h2>9. Responsabilidad</h2>
        <p>
          <Logo size="xs" className="inline-block align-baseline" /> no será responsable por:
        </p>
        <ul>
          <li>Errores derivados de datos incompletos o inconsistentes aportados por plataformas externas.</li>
          <li>Interrupciones causadas por proveedores externos o integraciones.</li>
          <li>Daños derivados del mal uso del servicio por parte del usuario.</li>
        </ul>

        <h2>10. Cancelación y eliminación de cuenta</h2>
        <p>
          El usuario puede cancelar su suscripción en cualquier momento. Tras la cancelación, el acceso al servicio
          finalizará al término del periodo facturado. Puede solicitar la eliminación de su cuenta vía email.
        </p>

        <h2>11. Modificaciones</h2>
        <p>
          <Logo size="xs" className="inline-block align-baseline" /> puede actualizar estos términos para adaptarlos a mejoras del
          servicio o cambios legales. La versión vigente estará siempre disponible en esta página.
        </p>

        <h2>12. Ley aplicable</h2>
        <p>
          Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someterán
          a los juzgados y tribunales competentes en España.
        </p>

        <h2>13. Contacto</h2>
        <p>
          Para consultas relacionadas con estos Términos de Uso: <br />
          <strong>hola@datahora.es</strong>
        </p>
      </div>

      <p className="text-xs text-neutral-500">
        Última actualización: 26 de noviembre de 2025
      </p>
    </div>
  );
}
