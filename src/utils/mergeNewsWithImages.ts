import { HOMECARD_LIST } from '@constants/main/homeCardList';
import { newsList } from 'src/types/news';

export const mergeNewsWithImages = (
  news: newsList[] | null | undefined,
  images: typeof HOMECARD_LIST,
) =>
  news?.map((item, index) => {
    const matchedImage = images[index % images.length];
    return {
      ...item,
      img: matchedImage ? matchedImage.img : null,
    };
  }) || [];
