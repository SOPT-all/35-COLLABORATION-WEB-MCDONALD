export interface favoriteList {
  id: number;
  burgerName: string;
  burgerNameEng: string;
  liked: boolean;
}

export interface favoriteResponse {
  burgers: favoriteList[];
}
