// src/app/navigation.tsx
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { getSession } from '@/features/account/controllers/get-session';

export async function AppBar() {
  const session = await getSession();

  return (
    <header className="w-full border-b bg-white/60 backdrop-blur-md rounded-t-3xl px-6 py-4 flex items-center justify-between">
      {/* LOGO */}
      <Link href="/" className="flex items-center">
        <Logo size="md" />
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/pricing"
            className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
          >
            Precios
          </Link>

          {session ? (
            <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary">
              Dashboard
            </Link>
          ) : null}

          {session ? (
            <Link href="/account" className="text-sm text-muted-foreground hover:text-primary">
              Mi cuenta
            </Link>
          ) : (
            <Button
              asChild
              className="bg-secondary text-white hover:bg-secondary/90 px-5 py-2 rounded-full text-sm font-semibold"
            >
              <Link href="/signup">Comenzar gratis</Link>
            </Button>

          )}
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <IoMenu size={28} />
          </SheetTrigger>

          <SheetContent className="bg-white">
            <div className="flex flex-col gap-6 mt-8">
              <Logo size="md" className="mb-4" />

              <Link href="/" className="text-lg hover:text-primary">Inicio</Link>
              <Link href="/pricing" className="text-lg hover:text-primary">Precios</Link>
              {session ? (
                <>
                  <Link href="/dashboard" className="text-lg hover:text-primary">Dashboard</Link>
                  <Link href="/account" className="text-lg hover:text-primary">Mi cuenta</Link>
                </>
              ) : (
                <Button asChild className="mt-4">
                  <Link href="/signup">Comenzar gratis</Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
