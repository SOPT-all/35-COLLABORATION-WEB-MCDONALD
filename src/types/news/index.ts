export interface newsList {
  id: number;
  content: string;
}

export interface getNewsResponse {
  news: newsList[];
}
