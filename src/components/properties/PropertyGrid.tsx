```typescript
import { PropertyCard } from './PropertyCard';
import { useProperties } from '@/hooks/useProperties';
import { Property } from '@/lib/types/property';

interface PropertyGridProps {
  properties: Property[];
}

export function PropertyGrid({ properties }: PropertyGridProps) {
  if (!properties.length) {
    return (
      <div className="text-center py-12">
        <p className="text-kingdom-text/70">No properties found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
```