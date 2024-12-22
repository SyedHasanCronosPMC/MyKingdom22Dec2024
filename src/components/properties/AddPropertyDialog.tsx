```typescript
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PropertyForm } from "./PropertyForm";
import type { PropertyFormData } from "@/lib/types/property";

interface AddPropertyDialogProps {
  onSubmitProperty: (data: PropertyFormData) => void;
}

export function AddPropertyDialog({ onSubmitProperty }: AddPropertyDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (data: PropertyFormData) => {
    await onSubmitProperty(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" /> Add Property
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-kingdom-dark border-kingdom-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            Add New Property
          </DialogTitle>
        </DialogHeader>
        <PropertyForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
```