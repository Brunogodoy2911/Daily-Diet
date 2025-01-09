import { MealType } from "@storage/meal/mealGetAll";

export const sortMealsByDate = (meals: MealType[]): MealType[] => {
  return meals.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    const currentDate = new Date().getTime();

    if (isNaN(dateA)) return 1;
    if (isNaN(dateB)) return -1;

    const diffA = Math.abs(currentDate - dateA);
    const diffB = Math.abs(currentDate - dateB);

    return diffA - diffB;
  });
};

export const calculateDietCompliancePercentage = (
  meals: MealType[]
): string => {
  const totalMeals = meals.length;

  if (totalMeals === 0) return "0,00";

  const mealsWithinDiet = meals.filter(
    (meal) => meal.type === "PRIMARY"
  ).length;

  const compliancePercentage = (mealsWithinDiet / totalMeals) * 100;

  return compliancePercentage.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const groupMealsByDate = (meals: MealType[]) => {
  return meals.reduce((sections, meal) => {
    const date = meal.date;
    const existingSection = sections.find((section) => section.title === date);

    if (existingSection) {
      existingSection.data.push(meal);
    } else {
      sections.push({ title: date, data: [meal] });
    }

    return sections;
  }, [] as { title: string; data: MealType[] }[]);
};
