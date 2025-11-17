import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, MoreVertical, Edit, Trash2 } from "lucide-react";
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

const TenantsManagement = () => {
  const tenants = [
    { 
      id: 1,
      name: "PT Maju Jaya", 
      subdomain: "majujaya", 
      status: "active",
      email: "admin@majujaya.com",
      users: 24,
      assets: 156
    },
    { 
      id: 2,
      name: "CV Sukses Mandiri", 
      subdomain: "suksesmandiri", 
      status: "active",
      email: "admin@suksesmandiri.com",
      users: 15,
      assets: 89
    },
    { 
      id: 3,
      name: "PT Tech Solutions", 
      subdomain: "techsolutions", 
      status: "inactive",
      email: "admin@techsolutions.com",
      users: 8,
      assets: 42
    },
  ];

  return (
    <DashboardLayout userType="super-admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Manajemen Tenant</h1>
            <p className="text-muted-foreground">Kelola semua tenant dalam sistem</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Buat Tenant Baru
          </Button>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Cari tenant..."
                className="pl-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Tenant</TableHead>
                <TableHead>Subdomain</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Email Kontak</TableHead>
                <TableHead className="text-right">Pengguna</TableHead>
                <TableHead className="text-right">Aset</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.map((tenant) => (
                <TableRow key={tenant.id}>
                  <TableCell className="font-medium">{tenant.name}</TableCell>
                  <TableCell className="text-muted-foreground">{tenant.subdomain}</TableCell>
                  <TableCell>
                    <Badge variant={tenant.status === "active" ? "default" : "secondary"}>
                      {tenant.status === "active" ? "Aktif" : "Non-aktif"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{tenant.email}</TableCell>
                  <TableCell className="text-right">{tenant.users}</TableCell>
                  <TableCell className="text-right">{tenant.assets}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover">
                        <DropdownMenuItem className="cursor-pointer">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
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

export default TenantsManagement;
