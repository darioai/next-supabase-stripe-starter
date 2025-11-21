// src/app/(app)/layout.tsx
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/20 border-t">
      <div className="container mx-auto flex gap-8 py-8">
        {/* Sidebar sencilla para la zona interna */}
        <aside className="w-56 flex-shrink-0">
          <div className="mb-6">
            <h2 className="text-xs font-semibold uppercase text-muted-foreground tracking-wide">
              Área de trabajo
            </h2>
          </div>

          <nav className="space-y-2 text-sm">
            <Link
              href="/dashboard"
              className="block rounded-md px-3 py-2 hover:bg-primary/10 hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/clients"
              className="block rounded-md px-3 py-2 hover:bg-primary/10 hover:text-primary"
            >
              Clientes
            </Link>
            <Link
              href="/reports"
              className="block rounded-md px-3 py-2 hover:bg-primary/10 hover:text-primary"
            >
              Informes
            </Link>
          </nav>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
