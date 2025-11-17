import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus, Upload } from "lucide-react";

export const CreateDamageReportDialog = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Laporan berhasil dibuat",
      description: "Laporan kerusakan telah dicatat dalam sistem",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Buat Laporan Baru
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Buat Laporan Kerusakan</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="asset">Aset *</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Pilih aset yang rusak" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Laptop Dell XPS 15</SelectItem>
                <SelectItem value="2">Printer HP LaserJet Pro</SelectItem>
                <SelectItem value="3">Proyektor Epson EB-X41</SelectItem>
                <SelectItem value="4">AC Split 1.5 PK</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Judul Laporan *</Label>
            <Input 
              id="title" 
              placeholder="Contoh: Printer tidak bisa cetak warna" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Deskripsi Kerusakan *</Label>
            <Textarea 
              id="description" 
              placeholder="Jelaskan detail kerusakan yang terjadi..."
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="severity">Tingkat Keparahan *</Label>
              <Select required defaultValue="medium">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih tingkat keparahan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Rendah</SelectItem>
                  <SelectItem value="medium">Sedang</SelectItem>
                  <SelectItem value="high">Tinggi</SelectItem>
                  <SelectItem value="critical">Kritis</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="estimated_cost">Estimasi Biaya Perbaikan</Label>
              <Input 
                id="estimated_cost" 
                type="number" 
                placeholder="0" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="images">Foto Kerusakan</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Klik untuk upload atau drag & drop
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Bisa upload beberapa gambar (PNG, JPG hingga 5MB per file)
              </p>
              <Input id="images" type="file" className="hidden" accept="image/*" multiple />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Batal
            </Button>
            <Button type="submit">
              Buat Laporan
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
