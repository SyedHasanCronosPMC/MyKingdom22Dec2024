```typescript
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Index from "@/pages/Index";
import Login from "@/pages/auth/Login";
import AuthCallback from "@/pages/auth/Callback";
import Home from "@/pages/Home";
import ManageProperties from "@/pages/properties/ManageProperties";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/properties"
        element={
          <ProtectedRoute>
            <ManageProperties />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
```