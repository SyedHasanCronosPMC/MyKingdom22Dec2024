import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleAuthCallback } from '@/integrations/supabase/auth';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const session = await handleAuthCallback();
        if (session) {
          navigate('/home', { replace: true });
        } else {
          navigate('/login', { replace: true });
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        navigate('/login', { replace: true });
      }
    };

    handleAuth();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-kingdom-dark">
      <div className="text-kingdom-text">Completing authentication...</div>
    </div>
  );
}