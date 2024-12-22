```typescript
import { supabase } from '@/integrations/supabase/client';
import type { Property, PropertyFormData, PropertyMetrics } from '../types/property';

export async function createProperty(data: PropertyFormData) {
  const { data: property, error } = await supabase
    .from('properties')
    .insert([{
      ...data,
      organization_id: (await supabase.auth.getUser()).data.user?.id,
      status: 'active',
      country: 'US'
    }])
    .select()
    .single();

  if (error) throw error;
  return property;
}

export async function getProperties() {
  const { data: properties, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return properties;
}

export async function getPropertyMetrics(propertyId: string) {
  const { data: metrics, error } = await supabase
    .from('property_metrics')
    .select('*')
    .eq('property_id', propertyId)
    .order('date', { ascending: false })
    .limit(1)
    .single();

  if (error) throw error;
  return metrics;
}

export async function updateProperty(id: string, data: Partial<PropertyFormData>) {
  const { data: property, error } = await supabase
    .from('properties')
    .update(data)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return property;
}

export async function deleteProperty(id: string) {
  const { error } = await supabase
    .from('properties')
    .delete()
    .eq('id', id);

  if (error) throw error;
}
```