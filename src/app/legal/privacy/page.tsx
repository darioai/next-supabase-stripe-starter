// 🚨 Modified function
// src/app/legal/privacy/page.tsx

import { Logo } from '@/components/logo';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-primary">
        Política de privacidad
      </h1>

      <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
        Última actualización: 26 de noviembre de 2025
      </p>

      <div className="prose prose-neutral max-w-none text-neutral-700 text-sm md:text-base space-y-6">

        <p>
          En <Logo size="xs" className="inline-block align-baseline" /> tratamos los datos personales de forma responsable,
          transparente y conforme al Reglamento General de Protección de Datos (RGPD – UE 2016/679) y a la Ley Orgánica
          de Protección de Datos y Garantía de Derechos Digitales (LOPDGDD – España).
        </p>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          UTA Solutions Europe, S.L.<br />
          Email de contacto: suscripciones@datahora.es
        </p>

        <h2>2. Datos que recopilamos</h2>
        <ul>
          <li><strong>Datos proporcionados por el usuario:</strong> nombre, email, información de facturación.</li>
          <li>
            <strong>Datos técnicos:</strong> IP, tipo de navegador, dispositivo, registros de acceso,
            cookies técnicas necesarias.
          </li>
          <li>
            <strong>Datos procedentes de integraciones externas:</strong> al conectar GA4, Google Ads, Meta Ads o Search Console,
            se importan únicamente métricas agregadas necesarias para generar informes.
          </li>
        </ul>

        <h2>3. Finalidades del tratamiento</h2>
        <ul>
          <li>Proveer el servicio SaaS y generar informes automáticos.</li>
          <li>Gestión de suscripciones, pagos y facturación.</li>
          <li>Garantizar la seguridad de la plataforma y prevenir accesos no autorizados.</li>
          <li>Envío de notificaciones operativas o avisos importantes.</li>
        </ul>

        <h2>4. Legitimación del tratamiento</h2>
        <ul>
          <li><strong>Ejecución del contrato</strong> para la prestación del servicio.</li>
          <li><strong>Cumplimiento de obligaciones legales</strong> (fiscales y contables).</li>
          <li><strong>Interés legítimo</strong> para mejorar el servicio y garantizar la seguridad.</li>
          <li><strong>Consentimiento</strong> para comunicaciones comerciales opcionales.</li>
        </ul>

        <h2>5. Destinatarios y transferencias</h2>
        <p>
          Los datos pueden ser tratados por proveedores que actúan como encargados del tratamiento, tales como:
          Supabase, Vercel, Stripe y Resend.  
          Todos cumplen con RGPD y aplican garantías adecuadas.
        </p>

        <h2>6. Conservación de datos</h2>
        <p>
          Los datos se conservarán mientras seas usuario activo o exista obligación legal de mantenerlos.
          Los logs técnicos se conservan por el tiempo necesario para garantizar la seguridad.
        </p>

        <h2>7. Derechos del usuario</h2>
        <p>Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación escribiendo a: <strong>suscripciones@datahora.es</strong>.</p>
        <p>También puedes presentar una reclamación ante la AEPD.</p>

        <h2>8. Seguridad</h2>
        <p>
          Aplicamos medidas técnicas y organizativas para proteger la información:
          cifrado, control de accesos, tokens seguros, auditorías y copias de seguridad en servidores europeos.
        </p>

        <h2>9. Integraciones externas</h2>
        <p>
          Cuando conectas plataformas externas, solo se accede a los permisos estrictamente necesarios
          para generar informes. No recopilamos datos personales de usuarios finales ni información sensible.
        </p>

        <h2>10. Cookies</h2>
        <p>
          Utilizamos cookies técnicas necesarias para el funcionamiento de la plataforma.
          Las cookies analíticas o opcionales requerirán consentimiento explícito.
        </p>

        <h2>11. Cambios en esta política</h2>
        <p>
          Esta política puede actualizarse para cumplir cambios legales o mejoras del servicio.
          La versión vigente estará siempre disponible en esta página.
        </p>

        <h2>12. Contacto</h2>
        <p>
          Para cualquier consulta sobre privacidad: <strong>suscripciones@datahora.es</strong>
        </p>
      </div>
    </div>
  );
}
