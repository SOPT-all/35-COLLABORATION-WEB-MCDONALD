import { instance } from '@apis/index';
import { AxiosResponse } from 'axios';
import { favoriteResponse, favoriteList } from 'src/types/favorites/index';

export const getFavorites = async (): Promise<favoriteList[] | null> => {
  try {
    const response: AxiosResponse<favoriteResponse> =
      await instance.get('/favorites');
    return response.data.burgers;
  } catch (error) {
    console.error('error', error);
    return null;
  }
};
