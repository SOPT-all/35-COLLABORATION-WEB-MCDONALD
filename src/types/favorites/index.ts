export interface favoriteList {
  id: number;
  burger_name: string;
  burger_name_eng: string;
}

export interface favoriteResponse {
  burgers: favoriteList[];
}
