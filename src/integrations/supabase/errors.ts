export class SupabaseError extends Error {
  constructor(message: string, public originalError?: any) {
    super(message);
    this.name = 'SupabaseError';
  }
}

export const handleSupabaseError = (error: any) => {
  console.error('Supabase error:', error);
  throw new SupabaseError(error.message || 'An error occurred with Supabase', error);
};