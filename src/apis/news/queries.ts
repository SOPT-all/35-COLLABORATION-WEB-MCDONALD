import { newsList } from 'src/types/news';
import { getNews } from './api';
import { useQuery } from '@tanstack/react-query';

export const useNews = () =>
  useQuery<newsList[] | null>({
    queryKey: ['news'], // 쿼리 키
    queryFn: getNews, // API 함수
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 10, // 10분
    retry: 3, // 실패 시 재시도 횟수
    refetchOnWindowFocus: false,
  });
