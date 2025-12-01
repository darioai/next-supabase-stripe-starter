"use client";

import React from "react";
import Link from "next/link";

export default function AccountPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold mb-4">Tu cuenta</h1>

      <p className="text-sm text-neutral-600 mb-4">
        La gestión detallada de tu suscripción estará disponible próximamente
        dentro del panel de datahora.
      </p>

      <p className="text-sm text-neutral-600">
        Mientras tanto, puedes consultar los planes y precios actuales en la
        página de{" "}
        <Link href="/pricing" className="text-blue-600 underline">
          precios
        </Link>
        .
      </p>
    </main>
  );
}
