"use client";

/**
 * SignupPage
 *
 * Página de lista de espera para acceso anticipado a datahora.
 * Muestra una oferta de lanzamiento con 50 % de descuento durante 6 meses
 * para las primeras 50 cuentas que activen un plan de pago.
 */

import type { FormEvent } from "react";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";


export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    // 🔴 IMPORTANTE: guardar la referencia al formulario ANTES del await
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error al enviar la solicitud.");
      }

      setSubmitted(true);
      // ✅ Usamos la referencia guardada, no event.currentTarget
      form.reset();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setError(
        "Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo en unos minutos.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 space-y-8">
      <header className="space-y-3 max-w-2xl">
        <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
          Acceso anticipado
        </p>
        <h1 className="text-3xl font-semibold text-primary">
          Lista de espera para la beta privada
        </h1>
        <p className="text-sm md:text-base text-neutral-700">
          Estamos preparando la primera versión de{" "}
          <Logo size="xs" className="inline-block align-baseline" /> para
          agencias, freelancers y pymes que necesitan automatizar sus informes
          de marketing digital.
        </p>
        <p className="text-sm md:text-base text-neutral-700">
          Si te unes ahora a la lista de espera, podrás acceder antes al
          producto y disfrutar de un{" "}
          <span className="font-semibold text-secondary">
            50&nbsp;% de descuento durante los primeros 3 meses
          </span>{" "}
          cuando lancemos los planes de pago. Oferta limitada a las{" "}
          <span className="font-semibold">primeras 50 cuentas activas</span>.
        </p>
      </header>

      {!submitted ? (
        <section className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-wide text-neutral-600"
              >
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                placeholder="Ej: Ana Pérez"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wide text-neutral-600"
              >
                Email profesional
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                placeholder="Ej: ana@agenciamarketing.es"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="businessType"
                className="text-xs font-semibold uppercase tracking-wide text-neutral-600"
              >
                Tipo de negocio
              </label>
              <select
                id="businessType"
                name="businessType"
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="agency">Agencia de marketing</option>
                <option value="freelance">
                  Freelance / consultor independiente
                </option>
                <option value="smb">Pyme / empresa propia</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="clientsRange"
                className="text-xs font-semibold uppercase tracking-wide text-neutral-600"
              >
                Nº de clientes con campañas activas
              </label>
              <select
                id="clientsRange"
                name="clientsRange"
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Selecciona un rango
                </option>
                <option value="0-5">0–5</option>
                <option value="6-15">6–15</option>
                <option value="16-30">16–30</option>
                <option value="30+">Más de 30</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-wide text-neutral-600"
              >
                ¿Cómo te gustaría que datahora te ayudara?{" "}
                <span className="normal-case text-[11px] text-neutral-500">
                  (opcional)
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                placeholder="Ej: Quiero ahorrar tiempo en los informes mensuales de mis clientes de Google Ads y Meta."
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-secondary focus:ring-secondary/30"
              />
              <label
                htmlFor="consent"
                className="text-xs text-neutral-600 leading-relaxed"
              >
                Acepto que datahora me envíe comunicaciones sobre el lanzamiento
                y la beta. Podrás darte de baja en cualquier momento.
              </label>
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                {error}
              </p>
            )}

            <div className="pt-1">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-secondary text-sm font-semibold text-white hover:bg-secondary/90"
              >
                {isSubmitting
                  ? "Enviando solicitud…"
                  : "Solicitar acceso anticipado"}
              </Button>
            </div>

            <p className="text-[11px] text-neutral-500">
              No te enviaremos spam. Usaremos tu email únicamente para
              comunicarte novedades de la beta y el lanzamiento.
            </p>
          </form>

          <aside className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm text-neutral-700">
            <h2 className="text-base font-semibold text-primary">
              ¿Qué implica el acceso anticipado?
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Podrás probar antes que nadie cómo{" "}
                <span className="font-medium">automatiza informes</span> con
                datos de GA4 y Meta Ads.
              </li>
              <li>
                Si eres una de las primeras{" "}
                <span className="font-medium">
                  50 cuentas en activar un plan
                </span>
                , tendrás un{" "}
                <span className="font-semibold">50&nbsp;% de descuento</span> en
                tu suscripción durante los primeros{" "}
                <span className="font-medium">3 meses</span>.
              </li>
              <li>
                Tu feedback ayudará a priorizar nuevas funcionalidades para
                agencias, freelancers y pymes en España.
              </li>
            </ul>
            <p className="text-xs text-neutral-500">
              Mientras cerramos la beta, puedes ver un ejemplo del informe que
              genera datahora y conocer mejor el producto.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                asChild
                variant="outline"
                className="rounded-xl text-xs border-neutral-300"
              >
                <Link href="/demo-report">Ver informe de ejemplo</Link>
              </Button>
            </div>
          </aside>
        </section>
      ) : (
        <section className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-sm text-emerald-900">
          <h2 className="text-base font-semibold">
            ¡Gracias por unirte a la lista de espera! 🙌
          </h2>
          <p>
            Hemos registrado tu interés en la beta privada de{" "}
            <Logo size="xs" className="inline-block align-baseline" />.
          </p>
          <p>
            A medida que vayamos activando cuentas, iremos invitando por orden
            de registro. Si estás entre las primeras{" "}
            <span className="font-semibold">50 cuentas</span> que activen un
            plan de pago, se aplicará automáticamente un{" "}
            <span className="font-semibold">
              50&nbsp;% de descuento durante los primeros 3 meses
            </span>
            .
          </p>
          <p>
            Mientras tanto, puedes revisar un ejemplo del informe y volver a la
            página principal:
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              asChild
              className="rounded-xl bg-secondary text-white hover:bg-secondary/90 text-sm px-5"
            >
              <Link href="/demo-report">Ver informe de ejemplo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rrounded-xl bg-primary text-white hover:bg-secondary/90 text-sm px-5ounded-xl text-sm border-neutral-300"
            >
              <Link href="/">Volver al inicio</Link>
            </Button>
          </div>
          <p>
          </p>
        </section>
      )}

      <div className="flex flex-wrap gap-3">
        <Button
          asChild
          variant="outline"
          className="rounded-xl text-sm border-neutral-300"
        >
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="rounded-xl text-sm border-neutral-300"
        >
          <Link href="/demo-report">Ver informe de ejemplo</Link>
        </Button>
      </div>
    </div>
  );
}
