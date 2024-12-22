```typescript
import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { PropertyHeader } from "@/components/properties/PropertyHeader";
import { PropertySearch } from "@/components/properties/PropertySearch";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { useProperties } from "@/hooks/useProperties";

export default function ManageProperties() {
  const [searchQuery, setSearchQuery] = useState("");
  const { properties, isLoading, createProperty } = useProperties();

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-kingdom-dark pt-16">
        <Navigation />
        <div className="md:ml-64 p-8">
          <div className="text-kingdom-text">Loading properties...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kingdom-dark pt-16">
      <Navigation />
      <div className="md:ml-64 p-8">
        <PropertyHeader onCreateProperty={createProperty} />
        <PropertySearch value={searchQuery} onChange={setSearchQuery} />
        <PropertyGrid properties={filteredProperties} />
      </div>
    </div>
  );
}
```