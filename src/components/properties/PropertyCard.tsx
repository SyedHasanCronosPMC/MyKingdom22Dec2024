```typescript
import { Building2, MapPin, Home, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Property, PropertyMetrics } from '@/lib/types/property';

interface PropertyCardProps {
  property: Property;
  metrics?: PropertyMetrics;
}

export function PropertyCard({ property, metrics }: PropertyCardProps) {
  return (
    <Card className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-kingdom-text">{property.name}</h3>
          <p className="text-sm text-kingdom-text/70 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {property.address}, {property.city}
          </p>
        </div>
        <Badge variant={property.status === 'active' ? 'default' : 'destructive'}>
          {property.status}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="space-y-1">
          <p className="text-sm text-kingdom-text/70">Type</p>
          <p className="text-kingdom-text flex items-center gap-1">
            <Building2 className="w-4 h-4" />
            {property.type}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-kingdom-text/70">Units</p>
          <p className="text-kingdom-text flex items-center gap-1">
            <Home className="w-4 h-4" />
            {property.total_units}
          </p>
        </div>
      </div>

      {metrics && (
        <div className="border-t border-kingdom-primary/10 pt-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <MetricItem
              label="Occupancy"
              value={`${metrics.occupancy_rate}%`}
              trend={metrics.occupancy_rate > 90 ? 'up' : 'down'}
            />
            <MetricItem
              label="Revenue"
              value={`$${metrics.revenue.toLocaleString()}`}
              trend={metrics.revenue > 10000 ? 'up' : 'down'}
            />
          </div>
        </div>
      )}
    </Card>
  );
}

function MetricItem({ label, value, trend }: { label: string; value: string; trend: 'up' | 'down' }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-kingdom-text/70">{label}</p>
      <p className={`text-lg font-semibold ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
        {value}
      </p>
    </div>
  );
}
```