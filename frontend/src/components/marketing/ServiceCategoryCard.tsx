import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface ServiceCategoryCardProps {
  title: string;
  bullets: string[];
}

export default function ServiceCategoryCard({ title, bullets }: ServiceCategoryCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-muted-foreground">{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
