import { Link } from '@tanstack/react-router';
import PricingTierCard from '../components/marketing/PricingTierCard';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      priceLabel: 'Custom quote',
      description: 'Perfect for small properties getting started with professional management',
      features: [
        'OTA listing optimization',
        'Basic revenue management',
        'Monthly performance reports',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      priceLabel: 'Custom quote',
      description: 'Comprehensive management for growing hospitality businesses',
      features: [
        'Everything in Starter',
        'Full business automation',
        'Dynamic pricing strategy',
        'Weekly performance reports',
        'Priority support',
        'Guest communication automation',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      priceLabel: 'Custom quote',
      description: 'Complete end-to-end management for multi-property portfolios',
      features: [
        'Everything in Professional',
        'Multi-property management',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced analytics & forecasting',
        'Lead generation campaigns',
        '24/7 support',
      ],
    },
  ];

  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Pricing & Packages
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Flexible solutions tailored to your property's unique needs
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <PricingTierCard
                key={index}
                name={tier.name}
                priceLabel={tier.priceLabel}
                description={tier.description}
                features={tier.features}
                featured={tier.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Not Sure Which Package is Right for You?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Schedule a free consultation and we'll help you choose the perfect solution for your property.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
