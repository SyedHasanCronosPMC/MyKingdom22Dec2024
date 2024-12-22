// Supabase configuration constants
export const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL,
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  authRedirectUrl: `${window.location.origin}/auth/callback`,
  providers: {
    google: {
      scopes: 'profile email'
    }
  }
} as const;