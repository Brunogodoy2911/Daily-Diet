import AsyncStorage from "@react-native-async-storage/async-storage";

import { STATISTICS_COLLECTION } from "@storage/storageConfig";

export type StatisticsType = {
  totalMeals: number;
  mealsInDiet: number;
  mealsOutDiet: number;
  bestSequenceInDiet: number;
};
export async function statisticsGetAll(): Promise<StatisticsType> {
  try {
    const storage = await AsyncStorage.getItem(STATISTICS_COLLECTION);

    const statistics: StatisticsType = storage
      ? JSON.parse(storage)
      : {
          totalMeals: 0,
          mealsInDiet: 0,
          mealsOutDiet: 0,
          bestSequenceInDiet: 0,
        };

    return statistics;
  } catch (error) {
    throw error;
  }
}
