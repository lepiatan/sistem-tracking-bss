import { ReactNode } from "react";
import { Building2, LayoutDashboard, Package, AlertCircle, Users, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "super-admin" | "tenant-admin";
  userName?: string;
  userEmail?: string;
}

const superAdminMenuItems = [
  { to: "/super-admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/super-admin/tenants", icon: Building2, label: "Manajemen Tenant" },
  { to: "/super-admin/statistics", icon: Package, label: "Statistik Sistem" },
];

const tenantAdminMenuItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/assets", icon: Package, label: "Aset" },
  { to: "/reports", icon: AlertCircle, label: "Laporan Kerusakan" },
  { to: "/users", icon: Users, label: "Pengguna" },
];

export const DashboardLayout = ({ 
  children, 
  userType,
  userName = "Admin User",
  userEmail = "admin@example.com"
}: DashboardLayoutProps) => {
  const menuItems = userType === "super-admin" ? superAdminMenuItems : tenantAdminMenuItems;
  const initials = userName.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar - Dark Theme */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-sidebar border-r border-sidebar-border shadow-xl z-10">
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-sidebar-foreground tracking-tight">Asset Tracker</h1>
                <p className="text-xs text-sidebar-foreground/60 font-medium">
                  {userType === "super-admin" ? "Super Admin" : "Tenant Admin"}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all duration-200 group"
                activeClassName="nav-item-active"
              >
                <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-sidebar-border">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start gap-3 px-3 py-3 h-auto hover:bg-sidebar-accent rounded-xl transition-all duration-200"
                >
                  <Avatar className="w-10 h-10 ring-2 ring-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-sm font-semibold">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-sidebar-foreground">{userName}</p>
                    <p className="text-xs text-sidebar-foreground/60 truncate">{userEmail}</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-popover">
                <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Profil
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Pengaturan
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Keluar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 min-h-screen">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
