import CalloutQuote from '../components/marketing/CalloutQuote';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, User, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const cities = ['Indore', 'Dehradun', 'Goa', 'Pune', 'Gurugram'];

  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About Evanka Hospitality
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Leading the way in innovative hospitality experiences
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Evanka Hospitality is a leader in innovative hospitality experiences with over{' '}
                <span className="font-semibold text-foreground">8 years of industry excellence</span>. Our hotels are
                well-reviewed nationwide, with properties in{' '}
                {cities.map((city, index) => (
                  <span key={city}>
                    <span className="font-semibold text-foreground">{city}</span>
                    {index < cities.length - 2 ? ', ' : index === cities.length - 2 ? ', and ' : ''}
                  </span>
                ))}
                .
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We are driven by a passion for delivering exceptional guest experiences through innovation, service
                excellence, and operational efficiency.
              </p>
            </div>

            {/* Philosophy Statement */}
            <CalloutQuote>
              Customer delight is the biggest driver of profit and market leadership.
            </CalloutQuote>

            {/* Founder Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <User className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Our Founder</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Evanka Hospitality was founded by{' '}
                  <span className="font-semibold text-foreground">Lalit Soni</span>, a visionary with over{' '}
                  <span className="font-semibold text-foreground">7 years of hands-on experience</span> in the
                  hospitality industry.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Under his leadership, the company has grown from a single property into a nationwide brand known for
                  its innovative approach and customer-centric philosophy.
                </p>
              </CardContent>
            </Card>

            {/* Investment Vision */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Investment Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Evanka Hospitality is expanding through <span className="font-semibold">Evanka Resorts</span>,
                  offering select partners the opportunity to participate in high-growth hospitality assets with
                  projected returns of up to{' '}
                  <span className="font-semibold text-primary">25% annually</span>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
