import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Building2, Users, Package, AlertTriangle, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const SuperAdminDashboard = () => {
  return (
    <DashboardLayout userType="super-admin" userName="Super Admin" userEmail="superadmin@assettracker.com">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">System Overview</h1>
          <p className="text-muted-foreground">Ringkasan sistem Asset Tracker secara keseluruhan</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Tenant"
            value="24"
            icon={Building2}
            trend={{ value: "12%", isPositive: true }}
          />
          <StatCard
            title="Tenant Aktif"
            value="22"
            icon={TrendingUp}
            subtitle="2 tenant non-aktif"
          />
          <StatCard
            title="Total Pengguna"
            value="486"
            icon={Users}
            trend={{ value: "8%", isPositive: true }}
          />
          <StatCard
            title="Total Aset"
            value="3,247"
            icon={Package}
            trend={{ value: "15%", isPositive: true }}
          />
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-warning/10 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Laporan Kerusakan</h3>
                <p className="text-sm text-muted-foreground">Total di seluruh tenant</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Terbuka</span>
                <span className="text-2xl font-bold text-warning">47</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Dalam Proses</span>
                <span className="text-2xl font-bold text-info">23</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Selesai Bulan Ini</span>
                <span className="text-2xl font-bold text-success">156</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-4">Tenant Terbaru</h3>
            <div className="space-y-4">
              {[
                { name: "PT Maju Jaya", date: "2 hari lalu", status: "active" },
                { name: "CV Sukses Mandiri", date: "5 hari lalu", status: "active" },
                { name: "PT Tech Solutions", date: "1 minggu lalu", status: "active" },
              ].map((tenant, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{tenant.name}</p>
                    <p className="text-sm text-muted-foreground">{tenant.date}</p>
                  </div>
                  <div className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                    Aktif
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

export default SuperAdminDashboard;
