import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '../../config/siteConfig';
import { useNavigate } from '@tanstack/react-router';

export default function WhatsAppButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    if (siteConfig.whatsapp.enabled) {
      window.open(siteConfig.whatsapp.link, '_blank', 'noopener,noreferrer');
    } else {
      navigate({ to: '/contact' });
    }
  };

  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-110"
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
