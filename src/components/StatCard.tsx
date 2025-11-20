import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  subtitle?: string;
}

export const StatCard = ({ title, value, icon: Icon, trend, subtitle }: StatCardProps) => {
  return (
    <div className="stat-card group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl -z-10 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500" />
      
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">{title}</p>
          <h3 className="text-4xl font-bold text-foreground mb-2 tracking-tight">{value}</h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground font-medium">{subtitle}</p>
          )}
          {trend && (
            <div className="flex items-center gap-2 mt-3">
              <span className={`text-sm font-bold px-2.5 py-1 rounded-lg ${
                trend.isPositive 
                  ? 'bg-success/10 text-success ring-1 ring-success/20' 
                  : 'bg-destructive/10 text-destructive ring-1 ring-destructive/20'
              }`}>
                {trend.isPositive ? '↑' : '↓'} {trend.value}
              </span>
              <span className="text-xs text-muted-foreground font-medium">dari bulan lalu</span>
            </div>
          )}
        </div>
        <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl ring-1 ring-primary/5 group-hover:ring-primary/10 group-hover:scale-105 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>
      </div>
    </div>
  );
};
