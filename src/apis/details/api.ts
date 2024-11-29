import { get } from '@apis/index';
import { AxiosResponse } from 'axios';
import { Burger } from 'src/types/details';

export const fetchBurgerDetail = async (
  burger_id: number,
): Promise<Burger | null> => {
  const response: AxiosResponse<Burger> = await get(`/burgers/${burger_id}`);
  return response.data;
};
