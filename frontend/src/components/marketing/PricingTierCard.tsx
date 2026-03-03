import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Badge } from '@/components/ui/badge';

interface PricingTierCardProps {
  name: string;
  priceLabel: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export default function PricingTierCard({
  name,
  priceLabel,
  description,
  features,
  featured = false,
}: PricingTierCardProps) {
  return (
    <Card className={`relative h-full ${featured ? 'border-primary shadow-lg' : ''}`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <div className="mt-4">
          <div className="text-3xl font-bold">{priceLabel}</div>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact">
          <Button className="w-full" variant={featured ? 'default' : 'outline'}>
            Get Started
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
