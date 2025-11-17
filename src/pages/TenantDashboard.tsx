import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Package, CheckCircle, AlertCircle, Wrench, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TenantDashboard = () => {
  return (
    <DashboardLayout userType="tenant-admin" userName="Budi Santoso" userEmail="budi@company.com">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Selamat datang kembali, Budi!</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Aset"
            value="156"
            icon={Package}
            trend={{ value: "5%", isPositive: true }}
          />
          <StatCard
            title="Aset Aktif"
            value="142"
            icon={CheckCircle}
            subtitle="91% dari total"
          />
          <StatCard
            title="Dalam Maintenance"
            value="8"
            icon={Wrench}
            subtitle="5% dari total"
          />
          <StatCard
            title="Laporan Terbuka"
            value="6"
            icon={AlertCircle}
            subtitle="Perlu perhatian"
          />
        </div>

        {/* Recent Activity & Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Aktivitas Terbaru
            </h3>
            <div className="space-y-4">
              {[
                { 
                  action: "Aset baru ditambahkan", 
                  item: "Laptop Dell XPS 15", 
                  time: "10 menit lalu",
                  type: "success"
                },
                { 
                  action: "Laporan kerusakan dibuat", 
                  item: "Printer HP LaserJet", 
                  time: "1 jam lalu",
                  type: "warning"
                },
                { 
                  action: "Aset diperbarui", 
                  item: "Proyektor Epson EB-X41", 
                  time: "3 jam lalu",
                  type: "info"
                },
                { 
                  action: "Maintenance selesai", 
                  item: "AC Unit 2 - Ruang Meeting", 
                  time: "5 jam lalu",
                  type: "success"
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-success' :
                    activity.type === 'warning' ? 'bg-warning' : 'bg-info'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.item}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Laporan Kerusakan Aktif
            </h3>
            <div className="space-y-4">
              {[
                { 
                  title: "Printer tidak bisa cetak warna", 
                  asset: "Printer HP LaserJet", 
                  severity: "high",
                  status: "reported"
                },
                { 
                  title: "AC tidak dingin", 
                  asset: "AC Unit 2", 
                  severity: "medium",
                  status: "in_progress"
                },
                { 
                  title: "Keyboard beberapa tombol rusak", 
                  asset: "Laptop Dell Latitude", 
                  severity: "low",
                  status: "reported"
                },
              ].map((report, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground text-sm">{report.title}</h4>
                    <Badge variant={
                      report.severity === 'high' ? 'destructive' :
                      report.severity === 'medium' ? 'default' : 'secondary'
                    } className="text-xs">
                      {report.severity === 'high' ? 'Tinggi' :
                       report.severity === 'medium' ? 'Sedang' : 'Rendah'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{report.asset}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {report.status === 'reported' ? 'Dilaporkan' : 'Dalam Proses'}
                    </Badge>
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

export default TenantDashboard;
