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

export const addFavorite = async (burgerId: number): Promise<boolean> => {
  try {
    const response: AxiosResponse<{ success: boolean }> = await instance.post(
      `/favorites/${burgerId}`,
    );
    return response.data.success;
  } catch {
    return false;
  }
};
