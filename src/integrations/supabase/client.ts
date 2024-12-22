import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';
import { SUPABASE_CONFIG } from './config';

if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(
  SUPABASE_CONFIG.url,
  SUPABASE_CONFIG.anonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);