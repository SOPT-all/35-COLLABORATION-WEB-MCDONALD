import { burgerList } from 'src/types/burgerlist';
import { getBurgerList } from './api';
import { useQuery } from '@tanstack/react-query';

export const useBurgerList = (type: string, category: string) =>
  useQuery<burgerList[] | null>({
    queryKey: ['burgerList', type, category], // 쿼리 키
    queryFn: () => getBurgerList(type, category), // API 함수
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 10, // 10분
    retry: 3, // 실패 시 재시도 횟수
    refetchOnWindowFocus: false,
  });
