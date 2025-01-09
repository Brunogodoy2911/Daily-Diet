import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll, MealType } from "./mealGetAll";

export async function mealCreate(newMeal: MealType) {
  try {
    const storedMeals = await mealsGetAll();

    const mealAlreadyExists = storedMeals.some(
      (meal: MealType) =>
        meal.hour === newMeal.hour && meal.date === newMeal.date
    );

    if (mealAlreadyExists) {
      throw new AppError("Já existe refeição cadastrada neste horário!");
    }

    const formatedMeal = {
      ...newMeal,
      id: uuidv4(),
    };

    storedMeals.push(formatedMeal);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeals));
  } catch (error) {
    throw error;
  }
}
