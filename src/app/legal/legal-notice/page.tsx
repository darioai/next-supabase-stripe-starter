// 🚨 New function
// src/app/legal/legal-notice/page.tsx

import { Logo } from '@/components/logo';

export default function LegalNoticePage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
          Legal
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold text-primary">
          Aviso Legal
        </h1>

        <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
          Este Aviso Legal regula el acceso y uso de{' '}
          <Logo size="xs" className="inline-block align-baseline" />, así como la
          información general requerida por la Ley 34/2002, de Servicios de la Sociedad
          de la Información y Comercio Electrónico (LSSI-CE).
        </p>
      </header>

      <div className="prose prose-neutral max-w-none rounded-2xl border border-neutral-300 bg-neutral-50 p-6 text-neutral-700 text-sm md:text-base space-y-6">
        <h2>1. Titularidad del sitio web</h2>
        <p>
          El sitio web y la plataforma asociados a{' '}
          <Logo size="xs" className="inline-block align-baseline" /> son propiedad de:
        </p>
        <p>
          <strong>UTA Solutions Europa, S.L.</strong><br />
          NIF: [añadir NIF]<br />
          Domicilio social: [añadir dirección completa]<br />
          Email: <strong>hola@datahora.es</strong>
        </p>

        <h2>2. Objeto del sitio web</h2>
        <p>
          La finalidad de la plataforma es ofrecer un servicio SaaS para generar
          informes automáticos de marketing digital basados en datos de plataformas
          externas como GA4, Google Ads, Meta Ads y Search Console.
        </p>

        <h2>3. Acceso y uso del sitio</h2>
        <p>
          El acceso al sitio web es libre, aunque algunas áreas o servicios requieren
          registro previo. El usuario se compromete a utilizar la información y el
          servicio conforme a la ley, la buena fe y el presente Aviso Legal.
        </p>

        <h2>4. Propiedad intelectual e industrial</h2>
        <p>
          Todo el contenido del sitio web (textos, imágenes, logotipos, software,
          diseño, estructura y código fuente) pertenece a UTA Solutions Europa, S.L.
          o a sus respectivos licenciantes.
        </p>
        <p>
          Queda prohibida su reproducción, distribución, comunicación pública o
          transformación sin autorización expresa.
        </p>

        <h2>5. Responsabilidad del titular</h2>
        <p>
          UTA Solutions Europa, S.L. no se responsabiliza de:
        </p>
        <ul>
          <li>Interrupciones del servicio causadas por proveedores externos.</li>
          <li>Daños derivados del uso indebido del sitio por parte del usuario.</li>
          <li>Errores procedentes de datos importados desde plataformas externas.</li>
          <li>Daños producidos por malware, ataques o accesos no autorizados.</li>
        </ul>

        <h2>6. Enlaces externos</h2>
        <p>
          Este sitio puede incluir enlaces a plataformas de terceros.{' '}
          <Logo size="xs" className="inline-block align-baseline" /> no se
          responsabiliza de los contenidos, servicios o condiciones legales de dichos
          sitios.
        </p>

        <h2>7. Legislación aplicable</h2>
        <p>
          El presente Aviso Legal se rige por la legislación española. Para cualquier
          disputa o conflicto relacionado con su interpretación o uso, las partes se
          someterán a los juzgados y tribunales competentes en España.
        </p>

        <h2>8. Contacto</h2>
        <p>
          Para cuestiones relacionadas con este Aviso Legal, puedes escribir a:{' '}
          <strong>hola@datahora.es</strong>.
        </p>
      </div>

      <p className="text-xs text-neutral-500">
        Última actualización: 26 de noviembre de 2025
      </p>
    </div>
  );
}
