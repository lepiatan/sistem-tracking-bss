import { ReactNode, useState } from "react";
import { 
  Building2, 
  LayoutDashboard, 
  Package, 
  AlertCircle, 
  Users, 
  LogOut,
  Home,
  BarChart3,
  Settings,
  Menu,
  X
} from "lucide-react";
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
  { to: "/super-admin/statistics", icon: BarChart3, label: "Statistik Sistem" },
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
  const [navOpen, setNavOpen] = useState(true);
  const menuItems = userType === "super-admin" ? superAdminMenuItems : tenantAdminMenuItems;
  const initials = userName.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Icon-only Sidebar - Very Narrow */}
      <aside className="fixed left-0 top-0 h-full w-20 bg-sidebar z-20 flex flex-col items-center py-6 gap-6">
        {/* Logo */}
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
          <Package className="w-7 h-7 text-sidebar" />
        </div>

        {/* Icon Navigation */}
        <nav className="flex-1 flex flex-col items-center gap-2 w-full px-4">
          <NavLink
            to={userType === "super-admin" ? "/super-admin" : "/dashboard"}
            end
            className="icon-sidebar-item"
            activeClassName="icon-sidebar-item-active"
          >
            <Home className="w-5 h-5" />
          </NavLink>
          <NavLink
            to={userType === "super-admin" ? "/super-admin/tenants" : "/assets"}
            className="icon-sidebar-item"
            activeClassName="icon-sidebar-item-active"
          >
            <Package className="w-5 h-5" />
          </NavLink>
          <NavLink
            to={userType === "super-admin" ? "/super-admin/statistics" : "/reports"}
            className="icon-sidebar-item"
            activeClassName="icon-sidebar-item-active"
          >
            <BarChart3 className="w-5 h-5" />
          </NavLink>
          {userType === "tenant-admin" && (
            <NavLink
              to="/users"
              className="icon-sidebar-item"
              activeClassName="icon-sidebar-item-active"
            >
              <Users className="w-5 h-5" />
            </NavLink>
          )}
        </nav>

        {/* Settings Icon */}
        <button className="icon-sidebar-item">
          <Settings className="w-5 h-5" />
        </button>

        {/* User Avatar */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="icon-sidebar-item">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="right" className="w-56 ml-2">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{userName}</p>
                <p className="text-xs text-muted-foreground">{userEmail}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Profil</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Pengaturan</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-destructive">
              <LogOut className="w-4 h-4 mr-2" />
              Keluar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </aside>

      {/* Secondary Navigation Panel */}
      <aside 
        className={`fixed left-20 top-0 h-full bg-navPanel border-r border-border z-10 transition-all duration-200 ${
          navOpen ? 'w-64' : 'w-0'
        } overflow-hidden`}
      >
        <div className="p-6">
          {/* Section Title */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-wide">
              {userType === "super-admin" ? "Admin Panel" : "Menu"}
            </h2>
            <button 
              onClick={() => setNavOpen(!navOpen)}
              className="p-1 hover:bg-navPanel-hover rounded-md transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-navPanel-foreground hover:bg-navPanel-hover transition-all duration-150"
                activeClassName="nav-item-active"
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Toggle Button when Nav is Closed */}
      {!navOpen && (
        <button
          onClick={() => setNavOpen(true)}
          className="fixed left-20 top-4 z-10 p-2 bg-white border border-border rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>
      )}

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-200 ${navOpen ? 'ml-[336px]' : 'ml-20'}`}>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
