export type MealBase = {
  id?: string;
  mealName: string;
  mealDescription: string;
  mealDate: string;
  mealHour: string;
  type: "PRIMARY" | "SECONDARY";
};

export type MealDetails = MealBase;

export type MealCreation = Omit<MealBase> & { title: string };
