import { Crown, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-kingdom-dark to-black py-12 border-t border-kingdom-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Crown className="h-6 w-6 text-kingdom-accent animate-glow" />
              <span className="text-xl font-bold gradient-text">MyKingdom</span>
            </div>
            <p className="text-kingdom-text/70">
              Revolutionizing property management with AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Github} />
              <SocialLink href="#" icon={Linkedin} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <FooterLinks>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinks>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <FooterLinks>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">API Reference</FooterLink>
              <FooterLink href="#">Status</FooterLink>
            </FooterLinks>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-kingdom-text/70 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-kingdom-dark/50 border border-kingdom-primary/20 rounded-lg px-4 py-2 text-kingdom-text placeholder:text-kingdom-text/50"
              />
              <Button size="icon" variant="outline" className="shrink-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-kingdom-primary/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-kingdom-text/70 text-sm">
              © {currentYear} MyKingdom. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2">{children}</ul>;
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-kingdom-text/70 hover:text-kingdom-primary transition-colors">
        {children}
      </a>
    </li>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: typeof Twitter }) {
  return (
    <a 
      href={href} 
      className="text-kingdom-text/70 hover:text-kingdom-primary transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}