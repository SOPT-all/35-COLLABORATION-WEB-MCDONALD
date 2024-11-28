export interface favoriteList {
  id: number;
  burgerName: string;
  burgerNameEng: string;
}

export interface favoriteResponse {
  burgers: favoriteList[];
}
