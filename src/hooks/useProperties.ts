```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createProperty, getProperties, updateProperty, deleteProperty } from '@/lib/api/properties';
import type { PropertyFormData } from '@/lib/types/property';

export function useProperties() {
  const queryClient = useQueryClient();

  const propertiesQuery = useQuery({
    queryKey: ['properties'],
    queryFn: getProperties
  });

  const createPropertyMutation = useMutation({
    mutationFn: createProperty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    }
  });

  const updatePropertyMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<PropertyFormData> }) => 
      updateProperty(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    }
  });

  const deletePropertyMutation = useMutation({
    mutationFn: deleteProperty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    }
  });

  return {
    properties: propertiesQuery.data ?? [],
    isLoading: propertiesQuery.isLoading,
    error: propertiesQuery.error,
    createProperty: createPropertyMutation.mutate,
    updateProperty: updatePropertyMutation.mutate,
    deleteProperty: deletePropertyMutation.mutate,
    isCreating: createPropertyMutation.isPending,
    isUpdating: updatePropertyMutation.isPending,
    isDeleting: deletePropertyMutation.isPending
  };
}
```