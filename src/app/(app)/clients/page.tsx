// src/app/(app)/clients/page.tsx
'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Client = {
  id: string;
  name: string;
  contactEmail: string;
};

const initialClients: Client[] = [
  { id: 'cli-1', name: 'Agencia Alfa', contactEmail: 'contacto@alfa.es' },
  { id: 'cli-2', name: 'Tienda Beta', contactEmail: 'marketing@beta.es' },
  { id: 'cli-3', name: 'Clínica Salud+', contactEmail: 'info@saludplus.es' },
];

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleAddClient() {
    if (!name.trim()) return;
    const newClient: Client = {
      id: uuidv4(),
      name: name.trim(),
      contactEmail: email.trim(),
    };
    setClients((prev) => [newClient, ...prev]);
    setName('');
    setEmail('');
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-logo font-bold text-primary">
          Clientes
        </h1>
        <p className="text-muted-foreground">
          Gestiona los clientes para los que generas informes en datAHORA.
        </p>
      </header>

      {/* Formulario simple de alta */}
      <section className="rounded-lg border bg-card p-4 shadow-sm space-y-4">
        <h2 className="text-sm font-semibold">Añadir nuevo cliente</h2>
        <div className="grid gap-3 md:grid-cols-[2fr,2fr,auto]">
          <Input
            placeholder="Nombre del cliente"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email de contacto (opcional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleAddClient} className="w-full md:w-auto">
            Guardar
          </Button>
        </div>
      </section>

      {/* Tabla de clientes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold">Listado de clientes</h2>
        <div className="overflow-x-auto rounded-lg border bg-card">
          <table className="min-w-full text-sm">
            <thead className="bg-muted/60">
              <tr className="text-left">
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Email de contacto</th>
                <th className="px-4 py-2">ID interno</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-t">
                  <td className="px-4 py-2">{client.name}</td>
                  <td className="px-4 py-2 text-muted-foreground">
                    {client.contactEmail || '—'}
                  </td>
                  <td className="px-4 py-2 text-xs text-muted-foreground">
                    {client.id}
                  </td>
                </tr>
              ))}
              {clients.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-muted-foreground"
                  >
                    Aún no tienes clientes. Crea el primero arriba.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
