import { get } from '@apis/index';
import { AxiosResponse } from 'axios';
import { burgerList, getBurgerListResponse } from 'src/types/burgerlist';

export const getBurgerList = async (
  type: string,
  category: string,
  pageParam: number | null | unknown,
): Promise<burgerList[]> => {
  try {
    const response: AxiosResponse<getBurgerListResponse> = await get(
      `/burgers?type=${type}&category=${category}&cursor=${pageParam}`,
    );
    return response.data.burgers;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};
