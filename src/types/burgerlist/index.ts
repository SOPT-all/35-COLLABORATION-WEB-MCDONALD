export interface burgerList {
  id: number;
  burgerName: string;
  burgerNameEng: string;
  isLiked: boolean;
}

export interface getBurgerListResponse {
  burgers: burgerList[];
}
