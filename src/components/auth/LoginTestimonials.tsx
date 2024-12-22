import { TestimonialsCarousel } from "./TestimonialsCarousel";

export function LoginTestimonials() {
  return (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold gradient-text animate-glow">
          Welcome to MyKingdom
        </h2>
        <p className="text-xl text-kingdom-text/90 leading-relaxed">
          Join thousands of property managers who have transformed their business with our AI-powered platform.
        </p>
        <div className="flex items-center justify-center space-x-2 text-kingdom-text/80">
          <span className="flex items-center">
            <span className="inline-block w-2 h-2 bg-kingdom-primary rounded-full mr-2 animate-pulse" />
            Smart Analytics
          </span>
          <span className="text-kingdom-primary/50">•</span>
          <span className="flex items-center">
            <span className="inline-block w-2 h-2 bg-kingdom-secondary rounded-full mr-2 animate-pulse" />
            AI Insights
          </span>
          <span className="text-kingdom-primary/50">•</span>
          <span className="flex items-center">
            <span className="inline-block w-2 h-2 bg-kingdom-accent rounded-full mr-2 animate-pulse" />
            24/7 Support
          </span>
        </div>
      </div>

      <TestimonialsCarousel />
    </div>
  );
}