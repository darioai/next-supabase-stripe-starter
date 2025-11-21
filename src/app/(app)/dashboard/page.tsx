// src/app/(app)/dashboard/page.tsx

const mockStats = [
  { label: 'Clientes activos', value: 8 },
  { label: 'Informes generados este mes', value: 24 },
  { label: 'Métricas totales registradas', value: 312 },
];

const mockReports = [
  {
    id: 'RPT-001',
    client: 'Agencia Alfa',
    period: 'Oct 2025',
    status: 'Entregado',
  },
  {
    id: 'RPT-002',
    client: 'Tienda Beta',
    period: 'Oct 2025',
    status: 'Borrador',
  },
  {
    id: 'RPT-003',
    client: 'Clínica Salud+',
    period: 'Sep 2025',
    status: 'Entregado',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-logo font-bold text-primary">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Resumen de actividad de tus clientes e informes en datAHORA.
        </p>
      </header>

      {/* Tarjetas de métricas rápidas */}
      <section className="grid gap-6 md:grid-cols-3">
        {mockStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border bg-card p-5 shadow-sm"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-primary">
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      {/* Tabla de últimos informes */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Últimos informes</h2>
        <div className="overflow-x-auto rounded-lg border bg-card">
          <table className="min-w-full text-sm">
            <thead className="bg-muted/60">
              <tr className="text-left">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Cliente</th>
                <th className="px-4 py-2">Periodo</th>
                <th className="px-4 py-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {mockReports.map((report) => (
                <tr key={report.id} className="border-t">
                  <td className="px-4 py-2">{report.id}</td>
                  <td className="px-4 py-2">{report.client}</td>
                  <td className="px-4 py-2">{report.period}</td>
                  <td className="px-4 py-2">{report.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
