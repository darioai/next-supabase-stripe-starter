// src/app/(app)/reports/page.tsx

const mockReports = [
  {
    id: 'RPT-001',
    client: 'Agencia Alfa',
    period: 'Oct 2025',
    createdAt: '2025-11-01',
    status: 'Entregado',
  },
  {
    id: 'RPT-002',
    client: 'Tienda Beta',
    period: 'Oct 2025',
    createdAt: '2025-11-02',
    status: 'Borrador',
  },
  {
    id: 'RPT-003',
    client: 'Clínica Salud+',
    period: 'Sep 2025',
    createdAt: '2025-10-02',
    status: 'Entregado',
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-logo font-bold text-primary">
          Informes
        </h1>
        <p className="text-muted-foreground">
          Consulta y gestiona los informes generados para tus clientes.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold">Historial de informes</h2>
        <div className="overflow-x-auto rounded-lg border bg-card">
          <table className="min-w-full text-sm">
            <thead className="bg-muted/60">
              <tr className="text-left">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Cliente</th>
                <th className="px-4 py-2">Periodo</th>
                <th className="px-4 py-2">Fecha de creación</th>
                <th className="px-4 py-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {mockReports.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="px-4 py-2">{r.id}</td>
                  <td className="px-4 py-2">{r.client}</td>
                  <td className="px-4 py-2">{r.period}</td>
                  <td className="px-4 py-2">{r.createdAt}</td>
                  <td className="px-4 py-2">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
