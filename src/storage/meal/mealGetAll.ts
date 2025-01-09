import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export type MealType = {
  id?: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  type: "PRIMARY" | "SECONDARY";
};
export async function mealsGetAll(): Promise<MealType[]> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealType[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
