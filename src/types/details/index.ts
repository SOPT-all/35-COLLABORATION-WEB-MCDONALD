export interface Burger {
  id: number;
  burger_name: string;
  burger_name_eng: string;
  description: string;
  nutritionContent: {
    weightG: number | null;
    weightML: number;
    calories: number;
    sugar: number;
    protein: number;
    saturatedFat: number;
    sodium: number;
    caffeine: number;
  };
  nutritionRef: {
    weightG: number | null;
    weightML: number;
    calories: number;
    sugar: number;
    protein: number;
    saturatedFat: number;
    sodium: number;
    caffeine: number;
  };
  allergy: string[];
  origin: string;
}
