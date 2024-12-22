import { cn } from "@/lib/utils";

interface LoginLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function LoginLayout({ children, className }: LoginLayoutProps) {
  return (
    <div className={cn("min-h-screen flex", className)}>
      {children}
    </div>
  );
}

function Left({ children, className }: LoginLayoutProps) {
  return (
    <div className={cn(
      "w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 bg-gradient-dark relative overflow-hidden",
      className
    )}>
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-kingdom-primary/5 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-kingdom-secondary/5 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="glass-card p-8 rounded-xl shadow-xl backdrop-blur-lg border border-kingdom-primary/20">
          {children}
        </div>
      </div>
    </div>
  );
}

function Right({ children, className }: LoginLayoutProps) {
  return (
    <div className={cn(
      "hidden lg:flex w-1/2 bg-gradient-dark flex-col items-center justify-center p-12 relative",
      className
    )}>
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-kingdom-primary/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-kingdom-secondary/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {children}
      </div>
    </div>
  );
}

LoginLayout.Left = Left;
LoginLayout.Right = Right;