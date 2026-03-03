import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Lead } from '../backend';

export function useGetAllLeads() {
  const { actor, isFetching } = useActor();

  return useQuery<Lead[]>({
    queryKey: ['leads'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllLeads();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetLeadsByCreatedAt() {
  const { actor, isFetching } = useActor();

  return useQuery<Lead[]>({
    queryKey: ['leads', 'by-created-at'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLeadsByCreatedAt();
    },
    enabled: !!actor && !isFetching,
  });
}
