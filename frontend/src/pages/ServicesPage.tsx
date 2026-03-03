import { Link } from '@tanstack/react-router';
import ServiceCategoryCard from '../components/marketing/ServiceCategoryCard';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  const services = [
    {
      title: 'OTA Listing & Optimization',
      bullets: [
        'Listing creation on Airbnb, Booking.com, Agoda, MakeMyTrip, etc.',
        'SEO-optimized descriptions',
        'Professional photo guidance',
        'Review management',
      ],
    },
    {
      title: 'Hotel Revenue Management',
      bullets: [
        'Dynamic pricing strategy',
        'Market and competitor analysis',
        'Occupancy forecasting',
        'Weekly performance reports',
      ],
    },
    {
      title: 'Hotel Business Automation',
      bullets: [
        'PMS setup',
        'Channel manager integration',
        'Automated guest communication',
        'Payment and invoicing automation',
      ],
    },
    {
      title: 'Airbnb Automation & Management',
      bullets: [
        'Full listing management',
        'Smart pricing tools',
        'Guest communication automation',
        'Cleaning and operations coordination',
      ],
    },
    {
      title: 'Hotel Lead Generation',
      bullets: [
        'Direct booking website',
        'Google and Meta ads',
        'SEO for hotel websites',
        'Email marketing',
      ],
    },
  ];

  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Hospitality Growth Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Comprehensive solutions to transform your hotel operations and maximize revenue
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {services.map((service, index) => (
              <ServiceCategoryCard key={index} title={service.title} bullets={service.bullets} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent/5 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Hotel Business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Get a free hotel growth audit and discover how we can help you increase revenue and streamline operations.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg">
              Get Free Audit
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
