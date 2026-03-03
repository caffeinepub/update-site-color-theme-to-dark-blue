import { useState } from 'react';
import { useActor } from '../../hooks/useActor';

interface SubmitLeadParams {
  name: string;
  hotelName: string;
  city: string;
  numberOfRooms: bigint;
  phoneNumber: string;
  email: string;
}

export function useSubmitLead() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const submitLead = async (params: SubmitLeadParams) => {
    if (!actor) {
      throw new Error('Backend actor not initialized');
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await actor.submitLead(
        params.name,
        params.hotelName,
        params.city,
        params.numberOfRooms,
        params.phoneNumber,
        params.email
      );
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to submit lead');
      setError(error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitLead,
    isSubmitting,
    error,
  };
}
