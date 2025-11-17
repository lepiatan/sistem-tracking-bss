import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Card } from "@/components/ui/card";
import { Building2, Users, Package, AlertCircle, TrendingUp, Activity } from "lucide-react";

const StatisticsSystem = () => {
  return (
    <DashboardLayout userType="super-admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Statistik Sistem</h1>
          <p className="text-muted-foreground">Overview statistik keseluruhan sistem</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Total Tenant"
            value={45}
            icon={Building2}
            trend={{ value: "12%", isPositive: true }}
            subtitle="3 bulan terakhir"
          />
          <StatCard
            title="Tenant Aktif"
            value={42}
            icon={Activity}
            trend={{ value: "8%", isPositive: true }}
            subtitle="93% dari total"
          />
          <StatCard
            title="Total Pengguna"
            value={856}
            icon={Users}
            trend={{ value: "15%", isPositive: true }}
            subtitle="Semua tenant"
          />
          <StatCard
            title="Total Aset"
            value="12,458"
            icon={Package}
            trend={{ value: "23%", isPositive: true }}
            subtitle="Semua tenant"
          />
          <StatCard
            title="Laporan Kerusakan"
            value={342}
            icon={AlertCircle}
            trend={{ value: "5%", isPositive: false }}
            subtitle="Bulan ini"
          />
          <StatCard
            title="Pertumbuhan"
            value="28%"
            icon={TrendingUp}
            trend={{ value: "12%", isPositive: true }}
            subtitle="Year over year"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tenant Terbaru</h3>
            <div className="space-y-4">
              {[
                { name: "PT Maju Sejahtera", date: "15 Jan 2024", users: 12 },
                { name: "CV Digital Indonesia", date: "12 Jan 2024", users: 8 },
                { name: "PT Tech Nusantara", date: "10 Jan 2024", users: 15 },
                { name: "CV Kreatif Media", date: "8 Jan 2024", users: 6 },
              ].map((tenant, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{tenant.name}</p>
                    <p className="text-sm text-muted-foreground">{tenant.date}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{tenant.users} users</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Aktivitas Sistem</h3>
            <div className="space-y-4">
              {[
                { action: "Tenant baru terdaftar", tenant: "PT Maju Sejahtera", time: "2 jam lalu" },
                { action: "Update sistem", tenant: "System", time: "5 jam lalu" },
                { action: "Backup database", tenant: "System", time: "1 hari lalu" },
                { action: "Tenant ditambahkan", tenant: "CV Digital Indonesia", time: "2 hari lalu" },
              ].map((activity, index) => (
                <div key={index} className="py-3 border-b border-border last:border-0">
                  <p className="font-medium text-foreground">{activity.action}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-muted-foreground">{activity.tenant}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StatisticsSystem;
