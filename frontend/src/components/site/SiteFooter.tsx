import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { siteConfig } from '../../config/siteConfig';

export default function SiteFooter() {
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Results', path: '/results' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: SiFacebook, label: 'Facebook', href: '#' },
    { icon: SiX, label: 'X', href: '#' },
    { icon: SiLinkedin, label: 'LinkedIn', href: '#' },
    { icon: SiInstagram, label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="border-t bg-accent/5">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold tracking-tight text-primary">
              Stayzy
            </span>
            <p className="text-sm text-muted-foreground">
              Maximize your hotel revenue with smart automation and expert management.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-background transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h3 className="mb-4 font-semibold">More</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>info@stayzy.com</p>
              <p>Mon - Sat, 9 AM - 6 PM</p>
              {siteConfig.whatsapp.enabled && (
                <a
                  href={siteConfig.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary hover:underline"
                >
                  WhatsApp Us
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()}. Built with <Heart className="inline h-4 w-4 fill-primary text-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'unknown-app')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
