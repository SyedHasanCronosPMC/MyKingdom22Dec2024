```typescript
import { AddPropertyDialog } from "./AddPropertyDialog";
import type { PropertyFormData } from "@/lib/types/property";

interface PropertyHeaderProps {
  onCreateProperty: (data: PropertyFormData) => void;
}

export function PropertyHeader({ onCreateProperty }: PropertyHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">
          Property Management
        </h1>
        <p className="text-kingdom-text/80">
          Manage and monitor your property portfolio
        </p>
      </div>
      <AddPropertyDialog onSubmitProperty={onCreateProperty} />
    </div>
  );
}
```