import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";

export const CreateTenantDialog = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Tenant berhasil dibuat",
      description: "Tenant baru telah ditambahkan ke sistem",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Buat Tenant Baru
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Buat Tenant Baru</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Tenant *</Label>
              <Input id="name" placeholder="PT Contoh Perusahaan" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subdomain">Subdomain *</Label>
              <Input id="subdomain" placeholder="contoh-perusahaan" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact_email">Email Kontak *</Label>
              <Input id="contact_email" type="email" placeholder="admin@contoh.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact_phone">Nomor Telepon</Label>
              <Input id="contact_phone" type="tel" placeholder="081234567890" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="max_users">Maksimal User</Label>
              <Input id="max_users" type="number" defaultValue="10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max_assets">Maksimal Aset</Label>
              <Input id="max_assets" type="number" defaultValue="100" />
            </div>
          </div>

          <div className="border-t border-border pt-4 mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-3">Informasi Admin</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="admin_name">Nama Admin *</Label>
                <Input id="admin_name" placeholder="Nama lengkap admin" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin_email">Email Admin *</Label>
                <Input id="admin_email" type="email" placeholder="admin@contoh.com" required />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Batal
            </Button>
            <Button type="submit">
              Buat Tenant
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
