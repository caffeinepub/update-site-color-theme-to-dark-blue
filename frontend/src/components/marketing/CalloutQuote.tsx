import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CalloutQuoteProps {
  children: React.ReactNode;
}

export default function CalloutQuote({ children }: CalloutQuoteProps) {
  return (
    <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
      <CardContent className="p-8">
        <div className="flex items-start gap-4">
          <Quote className="h-8 w-8 shrink-0 text-primary" />
          <p className="text-xl font-semibold italic leading-relaxed md:text-2xl">{children}</p>
        </div>
      </CardContent>
    </Card>
  );
}
