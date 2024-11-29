import { burgerList } from 'src/types/burgerlist';
import { getBurgerList } from './api';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useBurgerList = (type: string, category: string) =>
  useInfiniteQuery<burgerList[], number | null>({
    queryKey: ['burgerList', type, category],
    queryFn: ({ pageParam }) => getBurgerList(type, category, pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.length >= 6 ? lastPage[lastPage.length - 1].id : null,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 10, // 10분
    retry: 3, // 실패 시 재시도 횟수
    refetchOnWindowFocus: true,
    initialPageParam: 0,
  });
