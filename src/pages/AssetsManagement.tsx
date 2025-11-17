import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, MoreVertical, Edit, Trash2 } from "lucide-react";
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

const AssetsManagement = () => {
  const assets = [
    { 
      id: 1,
      name: "Laptop Dell XPS 15", 
      category: "Computer", 
      status: "active",
      location: "Ruang IT - Lt. 2",
      serialNumber: "DXL-2024-001"
    },
    { 
      id: 2,
      name: "Printer HP LaserJet Pro", 
      category: "Printer", 
      status: "maintenance",
      location: "Ruang Admin - Lt. 1",
      serialNumber: "HPL-2024-005"
    },
    { 
      id: 3,
      name: "Proyektor Epson EB-X41", 
      category: "Electronics", 
      status: "active",
      location: "Ruang Meeting A",
      serialNumber: "EPB-2024-012"
    },
    { 
      id: 4,
      name: "AC Split 1.5 PK", 
      category: "Furniture", 
      status: "active",
      location: "Ruang Direktur",
      serialNumber: "ACS-2024-008"
    },
  ];

  return (
    <DashboardLayout userType="tenant-admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Manajemen Aset</h1>
            <p className="text-muted-foreground">Kelola semua aset perusahaan Anda</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Tambah Aset Baru
          </Button>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Cari aset berdasarkan nama, lokasi, atau serial number..."
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
                <TableHead>Nama Aset</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Lokasi</TableHead>
                <TableHead>Serial Number</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assets.map((asset) => (
                <TableRow key={asset.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{asset.name}</TableCell>
                  <TableCell className="text-muted-foreground">{asset.category}</TableCell>
                  <TableCell>
                    <Badge variant={
                      asset.status === "active" ? "default" :
                      asset.status === "maintenance" ? "secondary" : "destructive"
                    }>
                      {asset.status === "active" ? "Aktif" :
                       asset.status === "maintenance" ? "Maintenance" : "Rusak"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{asset.location}</TableCell>
                  <TableCell className="text-muted-foreground font-mono text-sm">{asset.serialNumber}</TableCell>
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
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          Laporkan Kerusakan
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Hapus
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

export default AssetsManagement;
