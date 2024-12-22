```typescript
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface PropertySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function PropertySearch({ value, onChange }: PropertySearchProps) {
  return (
    <div className="mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-kingdom-text/50" />
        <Input
          placeholder="Search properties..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 bg-kingdom-dark/50"
        />
      </div>
    </div>
  );
}
```