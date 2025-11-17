import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus, Upload } from "lucide-react";

export const CreateAssetDialog = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Aset berhasil ditambahkan",
      description: "Aset baru telah ditambahkan ke sistem",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Tambah Aset Baru
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Tambah Aset Baru</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 col-span-2">
              <Label htmlFor="name">Nama Aset *</Label>
              <Input id="name" placeholder="Contoh: Laptop Dell XPS 15" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategori *</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="computer">Computer</SelectItem>
                  <SelectItem value="printer">Printer</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="vehicle">Vehicle</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="serial_number">Serial Number</Label>
              <Input id="serial_number" placeholder="ABC-123-XYZ" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Lokasi</Label>
              <Input id="location" placeholder="Ruang IT - Lt. 2" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vendor">Vendor</Label>
              <Input id="vendor" placeholder="Nama vendor" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="purchase_price">Harga Pembelian</Label>
              <Input id="purchase_price" type="number" placeholder="0" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="current_value">Nilai Saat Ini</Label>
              <Input id="current_value" type="number" placeholder="0" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="purchase_date">Tanggal Pembelian</Label>
              <Input id="purchase_date" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="warranty_until">Garansi Hingga</Label>
              <Input id="warranty_until" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select defaultValue="active">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Aktif</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 col-span-2">
              <Label htmlFor="specifications">Spesifikasi</Label>
              <Textarea 
                id="specifications" 
                placeholder="Masukkan spesifikasi teknis aset..."
                rows={3}
              />
            </div>

            <div className="space-y-2 col-span-2">
              <Label htmlFor="notes">Catatan</Label>
              <Textarea 
                id="notes" 
                placeholder="Catatan tambahan..."
                rows={2}
              />
            </div>

            <div className="space-y-2 col-span-2">
              <Label htmlFor="image">Gambar Aset</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Klik untuk upload atau drag & drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PNG, JPG hingga 5MB
                </p>
                <Input id="image" type="file" className="hidden" accept="image/*" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Batal
            </Button>
            <Button type="submit">
              Tambah Aset
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
