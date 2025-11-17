import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, MoreVertical } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DamageReports = () => {
  const reports = [
    { 
      id: 1,
      title: "Printer tidak bisa cetak warna", 
      asset: "Printer HP LaserJet Pro",
      status: "reported",
      severity: "high",
      date: "2024-01-15"
    },
    { 
      id: 2,
      title: "AC tidak dingin", 
      asset: "AC Split 1.5 PK",
      status: "in_progress",
      severity: "medium",
      date: "2024-01-14"
    },
    { 
      id: 3,
      title: "Keyboard beberapa tombol rusak", 
      asset: "Laptop Dell XPS 15",
      status: "reported",
      severity: "low",
      date: "2024-01-13"
    },
    { 
      id: 4,
      title: "Proyektor tidak bisa menyala", 
      asset: "Proyektor Epson EB-X41",
      status: "resolved",
      severity: "critical",
      date: "2024-01-10"
    },
  ];

  return (
    <DashboardLayout userType="tenant-admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Laporan Kerusakan</h1>
            <p className="text-muted-foreground">Kelola laporan kerusakan aset</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Buat Laporan Baru
          </Button>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Cari laporan..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul Laporan</TableHead>
                <TableHead>Aset</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tingkat Keparahan</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{report.title}</TableCell>
                  <TableCell className="text-muted-foreground">{report.asset}</TableCell>
                  <TableCell>
                    <Badge variant={
                      report.status === "reported" ? "secondary" :
                      report.status === "in_progress" ? "default" : "outline"
                    }>
                      {report.status === "reported" ? "Dilaporkan" :
                       report.status === "in_progress" ? "Dalam Proses" : "Selesai"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      report.severity === "critical" ? "destructive" :
                      report.severity === "high" ? "destructive" :
                      report.severity === "medium" ? "default" : "secondary"
                    }>
                      {report.severity === "critical" ? "Kritis" :
                       report.severity === "high" ? "Tinggi" :
                       report.severity === "medium" ? "Sedang" : "Rendah"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{report.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover">
                        <DropdownMenuItem className="cursor-pointer">
                          Lihat Detail
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          Update Status
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-destructive">
                          Tutup Laporan
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DamageReports;
