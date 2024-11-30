import { useQuery } from '@tanstack/react-query';
import { fetchBurgerDetail } from './api';

export const useDetail = (burger_id: number) =>
  useQuery({
    queryKey: ['burgerDetail', burger_id],
    queryFn: () => fetchBurgerDetail(burger_id!),
    enabled: !!burger_id, // 버거아이디가 있을때만 실행
  });
