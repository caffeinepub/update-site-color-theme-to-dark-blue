import { TrendingUp, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ResultsMetricsStrip() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Increase in bookings',
    },
    {
      icon: Users,
      value: '25%',
      label: 'Higher revenue',
    },
    {
      icon: Zap,
      value: '70%',
      label: 'Reduction in manual operations',
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-8 w-8" />
              </div>
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">{metric.value}</div>
              <div className="text-lg font-medium">{metric.label}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
