import { get } from '@apis/index';
import { AxiosResponse } from 'axios';
import { getNewsResponse, newsList } from 'src/types/news';

export const getNews = async (): Promise<newsList[] | null> => {
  try {
    const response: AxiosResponse<getNewsResponse> = await get('/news');
    return response.data.news;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};
