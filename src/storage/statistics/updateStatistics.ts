import { mealsGetAll, MealType } from "@storage/meal/mealGetAll";
import { StatisticsType } from "./statisticsGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STATISTICS_COLLECTION } from "@storage/storageConfig";

export async function updateStatistics(): Promise<void> {
  try {
    const meals = await mealsGetAll();

    let mealsInDiet = 0;
    let mealsOutDiet = 0;
    let currentSequence = 0;
    let bestSequenceInDiet = 0;

    meals.forEach((meal: MealType) => {
      if (meal.type === "PRIMARY") {
        mealsInDiet++;
        currentSequence++;
        bestSequenceInDiet = Math.max(bestSequenceInDiet, currentSequence);
      } else {
        mealsOutDiet++;
        currentSequence = 0;
      }
    });

    const statistics: StatisticsType = {
      totalMeals: meals.length,
      mealsInDiet,
      mealsOutDiet,
      bestSequenceInDiet,
    };

    await AsyncStorage.setItem(
      STATISTICS_COLLECTION,
      JSON.stringify(statistics)
    );
  } catch (error) {
    throw error;
  }
}
