import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function CaseStudyPlaceholderCard() {
  return (
    <Card className="border-dashed">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
          <FileText className="h-6 w-6" />
        </div>
        <CardTitle>Case Study</CardTitle>
        <CardDescription>Coming Soon</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          We're currently documenting detailed case studies from our client partnerships. Check back soon to see real-world results and success stories.
        </p>
      </CardContent>
    </Card>
  );
}
