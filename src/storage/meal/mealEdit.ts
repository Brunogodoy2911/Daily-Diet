import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { mealsGetAll, MealType } from "./mealGetAll";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealEdit(mealData: MealType) {
  try {
    const storedMeals = await mealsGetAll();

    const mealIndex = storedMeals.findIndex((meal) => {
      return meal.id === mealData.id;
    });

    if (mealIndex === -1) {
      throw new AppError("Refeição não encontrada!");
    }

    const mealAlreadyExists = storedMeals.some(
      (meal: MealType) =>
        meal.hour === mealData.hour &&
        meal.date === mealData.date &&
        meal.id !== mealData.id
    );

    if (mealAlreadyExists) {
      throw new AppError("Já existe refeição cadastrada neste horário!");
    }

    storedMeals[mealIndex] = {
      ...storedMeals[mealIndex],
      ...mealData,
    };

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeals));
  } catch (error) {
    throw error;
  }
}
