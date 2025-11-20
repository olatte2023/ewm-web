export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-4">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 border rounded-lg shadow-sm">
          <div className="text-sm font-medium text-muted-foreground">Total Articles</div>
          <div className="text-2xl font-bold">128</div>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <div className="text-sm font-medium text-muted-foreground">Total Views</div>
          <div className="text-2xl font-bold">45.2k</div>
        </div>
        {/* Add more stats here */}
      </div>
    </div>
  );
}
