// src/components/cookie-banner.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Logo } from '@/components/logo';
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "datahora_cookie_consent";

type ConsentValue = "accepted" | "rejected";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function handleConsent(value: ConsentValue) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="mx-auto max-w-[1440px] px-4 pb-4">
        <div className="rounded-2xl border border-neutral-200 bg-white shadow-lg px-4 py-3 md:px-6 md:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
          <div className="space-y-1 md:space-y-0">
            <p className="font-medium text-neutral-900">
              Usamos cookies técnicas y analíticas.
            </p>
            <p className="text-xs md:text-sm text-neutral-600 max-w-xl">
              <Logo size="xs" className="inline-block align-baseline" />{' '} utiliza cookies esenciales y analíticas para mejorar tu experiencia.
              Puedes obtener más información en nuestra{" "}
              <Link
                href="/legal/cookies"
                className="text-primary font-medium hover:underline"
              >
                política de cookies
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            <Button
              variant="outline"
              className="rounded-full border-neutral-300 text-xs md:text-sm px-4"
              onClick={() => handleConsent("rejected")}
            >
              Rechazar
            </Button>
            <Button
              className="rounded-full bg-secondary text-white hover:bg-secondary/90 text-xs md:text-sm px-4"
              onClick={() => handleConsent("accepted")}
            >
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
