import { newsList } from 'src/types/news';
import { getNews } from './api';
import { useQuery } from '@tanstack/react-query';

export const useNews = (cursor: number) =>
  useQuery<newsList[] | null>({
    queryKey: ['news', cursor],
    queryFn: () => getNews(cursor),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 12,
    retry: 3,
    refetchOnWindowFocus: false,
  });
