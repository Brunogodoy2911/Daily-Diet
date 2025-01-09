import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "@screens/Feedback";
import { Meals } from "@screens/Meals";
import { MealCreation } from "@screens/MealCreation";
import { MealDetails } from "@screens/MealDetails";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();
export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="meals" component={Meals} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="mealCreation" component={MealCreation} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="mealDetails" component={MealDetails} />
    </Navigator>
  );
}
