import { Building2, TrendingUp, Zap, Users, Target } from 'lucide-react';
import PrimaryCtaGroup from '../components/marketing/PrimaryCtaGroup';
import ResultsMetricsStrip from '../components/marketing/ResultsMetricsStrip';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  const services = [
    {
      icon: Building2,
      title: 'OTA Listing & Optimization',
      description: 'We manage and optimize your listings on Booking.com, Airbnb, Agoda, and more.',
    },
    {
      icon: TrendingUp,
      title: 'Hotel Revenue Management',
      description: 'Dynamic pricing strategies to maximize occupancy and profits.',
    },
    {
      icon: Zap,
      title: 'Hotel Business Automation',
      description: 'Smart systems for reservations, payments, and guest communication.',
    },
    {
      icon: Users,
      title: 'Airbnb Automation & Management',
      description: 'Complete hands-off Airbnb hosting solutions.',
    },
    {
      icon: Target,
      title: 'Lead Generation for Hotels',
      description: 'Direct booking strategies to reduce OTA dependency.',
    },
  ];

  const benefits = [
    'Proven hospitality experience',
    'Data-driven pricing strategies',
    'Automation-first approach',
    'End-to-end property management',
    'Backed by Evanka Hospitality',
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(/assets/generated/stayzy-pattern.dim_1024x1024.png)', backgroundSize: '400px' }} />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Maximize Your Hotel Revenue with{' '}
                  <span className="text-primary">Smart Automation</span> & Expert Management
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Stayzy helps hotels, resorts, and Airbnb hosts increase bookings, automate operations, and grow profits with data-driven strategies.
                </p>
              </div>
              <PrimaryCtaGroup />
            </div>
            <div className="relative">
              <img
                src="/assets/generated/stayzy-hero-illustration.dim_1600x900.png"
                alt="Hotel management dashboard illustration"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Core Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              All-in-one management solutions for modern hospitality businesses
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Stayzy Section */}
      <section className="bg-accent/5 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why Choose Stayzy
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Our Clients Achieve
            </h2>
          </div>
          <ResultsMetricsStrip />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Want Higher Occupancy and Revenue?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90 md:text-xl">
            Book a free strategy call with our hospitality experts today.
          </p>
          <PrimaryCtaGroup variant="secondary" />
        </div>
      </section>
    </main>
  );
}
