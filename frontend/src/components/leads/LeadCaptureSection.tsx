import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSubmitLead } from './useSubmitLead';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface LeadFormData {
  name: string;
  propertyName: string;
  city: string;
  numberOfRooms: string;
  phone: string;
  email: string;
}

export default function LeadCaptureSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { submitLead, isSubmitting } = useSubmitLead();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    try {
      await submitLead({
        name: data.name,
        hotelName: data.propertyName,
        city: data.city,
        numberOfRooms: BigInt(data.numberOfRooms),
        phoneNumber: data.phone,
        email: data.email,
      });
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to submit lead:', error);
    }
  };

  if (isSuccess) {
    return (
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle2 className="mb-4 h-16 w-16 text-primary" />
          <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
          <p className="text-muted-foreground">
            We've received your information and will reach out within 24 hours with your free hotel growth audit.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Get a Free Hotel Growth Audit</CardTitle>
        <CardDescription>
          Fill in your details and receive a custom revenue improvement plan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="propertyName">Hotel / Property Name *</Label>
            <Input
              id="propertyName"
              {...register('propertyName', { required: 'Property name is required' })}
              placeholder="Your hotel or property name"
            />
            {errors.propertyName && (
              <p className="text-sm text-destructive">{errors.propertyName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              {...register('city', { required: 'City is required' })}
              placeholder="Property location"
            />
            {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="numberOfRooms">Number of Rooms *</Label>
            <Input
              id="numberOfRooms"
              type="number"
              min="1"
              {...register('numberOfRooms', {
                required: 'Number of rooms is required',
                min: { value: 1, message: 'Must be at least 1 room' },
              })}
              placeholder="Total rooms"
            />
            {errors.numberOfRooms && (
              <p className="text-sm text-destructive">{errors.numberOfRooms.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Get Free Audit'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
