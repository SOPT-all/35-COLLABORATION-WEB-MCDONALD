import { favoriteList } from 'src/types/favorites';
import { getFavorites } from './api';
import { useQuery } from '@tanstack/react-query';

export const useFavorites = () =>
  useQuery<favoriteList[] | null>({
    queryKey: ['favorites'],
    queryFn: getFavorites,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 3,
    refetchOnWindowFocus: false,
  });
