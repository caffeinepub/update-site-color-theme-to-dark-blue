import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

interface PrimaryCtaGroupProps {
  variant?: 'default' | 'secondary';
}

export default function PrimaryCtaGroup({ variant = 'default' }: PrimaryCtaGroupProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: '/contact', hash: 'audit-form' });
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        size="lg"
        variant={variant === 'secondary' ? 'secondary' : 'default'}
        onClick={handleClick}
        className="text-lg"
      >
        Get Free Consultation
      </Button>
      <Button
        size="lg"
        variant={variant === 'secondary' ? 'outline' : 'outline'}
        onClick={handleClick}
        className="text-lg"
      >
        Book Strategy Call
      </Button>
    </div>
  );
}
