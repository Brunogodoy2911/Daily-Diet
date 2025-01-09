import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealsGetAll } from "./mealGetAll";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealRemoveByName(mealDeleted: string) {
  try {
    const storedMeals = await mealsGetAll();
    const meals = storedMeals.filter((meal) => meal.id !== mealDeleted);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
}
