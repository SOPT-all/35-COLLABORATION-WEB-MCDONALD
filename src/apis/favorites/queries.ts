import { favoriteList } from 'src/types/favorites';
import { burgerList } from 'src/types/burgerlist';
import { getFavorites, addFavorite } from './api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useFavorites = () =>
  useQuery<favoriteList[] | null>({
    queryKey: ['favorites'],
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
    onMutate: async (id: number) => {
      // 캐시 백업
      const previousBurgerList = queryClient.getQueryData(['burgerList']);
      const previousFavorites = queryClient.getQueryData(['favorites']);

      // BurgerList 캐시 낙관적 업데이트
      queryClient.setQueryData(
        ['burgerList'],
        (old: favoriteList[] | burgerList[]) => {
          if (!old) return old;
          return old.map(
            (
              burger, // 버거 좋아요 상태 반전해서 낙관적 업데이트
            ) =>
              burger.id === id
                ? { ...burger, isLiked: !burger.isLiked }
                : burger,
          );
        },
      );

      // Favorites 캐시 낙관적 업데이트
      queryClient.setQueryData(
        ['favorites'],
        (old: favoriteList[] | burgerList[]) => {
          if (!old) return old;
          const isFavorite = old.some((burger) => burger.id === id); // 좋아요 목록에 존재하는지 확인
          if (isFavorite) {
            return old.filter((burger) => burger.id !== id); // 좋아요 취소 시 제거
          } else {
            return [...old, { id }]; // 좋아요 추가 시 추가
          }
        },
      );

      return { previousBurgerList, previousFavorites };
    },
    onError: (_error, _id, context) => {
      //Query에서 무조건 인자로 주지만 사용하지 않기 때문에 _넣어주기!
      // 에러 발생 시 캐시 롤백
      if (context?.previousBurgerList) {
        queryClient.setQueryData(['burgerList'], context.previousBurgerList);
      }
      if (context?.previousFavorites) {
        queryClient.setQueryData(['favorites'], context.previousFavorites);
      }
    },
    onSettled: () => {
      // 서버 동기화를 위해 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['burgerList'] });
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
};
