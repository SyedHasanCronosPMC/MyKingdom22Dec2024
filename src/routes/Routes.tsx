```typescript
import { Routes as RouterRoutes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("@/pages/Index"));
const Login = lazy(() => import("@/pages/auth/Login"));
const AuthCallback = lazy(() => import("@/pages/auth/Callback"));
const Home = lazy(() => import("@/pages/Home"));
const ManageProperties = lazy(() => import("@/pages/properties/ManageProperties"));

// Loading component for suspense fallback
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-kingdom-dark">
    <div className="text-kingdom-text">Loading...</div>
  </div>
);

export function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterRoutes>
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
      </RouterRoutes>
    </Suspense>
  );
}
```