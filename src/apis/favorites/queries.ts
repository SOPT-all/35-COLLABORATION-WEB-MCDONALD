import { favoriteList } from 'src/types/favorites';
import { getFavorites, addFavorite } from './api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useFavorites = () =>
  useQuery<favoriteList[] | null>({
    queryKey: ['burgerList'],
    queryFn: getFavorites,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 3,
    refetchOnWindowFocus: true,
  });

export const useAddFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['burgerList'] });
    },
    onError: (error) => error,
  });
};
