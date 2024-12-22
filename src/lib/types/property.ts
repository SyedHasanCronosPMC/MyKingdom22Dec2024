```typescript
export interface Property {
  id: string;
  organization_id: string;
  name: string;
  type: 'residential' | 'commercial' | 'industrial';
  status: 'active' | 'inactive' | 'maintenance';
  address: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  total_units: number;
  amenities: Record<string, boolean>;
  features: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface PropertyMetrics {
  id: string;
  property_id: string;
  date: string;
  occupancy_rate: number;
  revenue: number;
  expenses: number;
  maintenance_costs: number;
  tenant_satisfaction: number;
}

export interface PropertyFormData {
  name: string;
  type: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  total_units: number;
  amenities?: Record<string, boolean>;
  features?: Record<string, any>;
}
```