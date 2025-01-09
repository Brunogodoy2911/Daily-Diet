import { MealCreation, MealDetails } from "./meal";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      meals: undefined;
      statistics: {
        dietPercentage: string;
      };
      mealCreation: MealCreation;
      mealDetails: MealDetails;
      feedback: {
        selectedOption: string;
      };
    }
  }
}
