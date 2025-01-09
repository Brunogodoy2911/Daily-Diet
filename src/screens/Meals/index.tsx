import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Container, Text, Title } from "./styles";

import { Header } from "@components/HeaderHome";
import { ButtonDietStatus } from "@components/ButtonDietStatus";
import { Button } from "@components/Button";
import { ButtonMealItem } from "@components/ButtonMealItem";
import { Loading } from "@components/Loading";
import { ListEmpty } from "@components/ListEmpty";

import { mealsGetAll, MealType } from "@storage/meal/mealGetAll";
import { updateStatistics } from "@storage/statistics/updateStatistics";

import {
  calculateDietCompliancePercentage,
  groupMealsByDate,
  sortMealsByDate,
} from "@utils/mealsUtils";

export function Meals() {
  const [meals, setMeals] = useState<MealType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const fetchMeals = async () => {
    try {
      setIsLoading(true);
      const data = await mealsGetAll();
      const sortedMeals = sortMealsByDate(data);
      setMeals(sortedMeals);
    } catch (error) {
      Alert.alert("Refeições", "Não foi possível carregar as refeições!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonDietStatus = () => {
    const dietPercentage = calculateDietCompliancePercentage(meals);
    navigation.navigate("statistics", { dietPercentage });
  };

  const handleButtonMealCreation = () => {
    navigation.navigate("mealCreation", { title: "Nova refeição" });
  };

  const handleButtonMealItem = (item: MealType) => {
    navigation.navigate("mealDetails", {
      id: item.id,
      mealName: item.name,
      mealDescription: item.description,
      mealDate: item.date,
      mealHour: item.hour,
      type: item.type,
    });
  };

  const groupedMeals = groupMealsByDate(meals);

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
      updateStatistics();
    }, [])
  );

  return (
    <Container>
      <Header />

      <ButtonDietStatus
        onPress={handleButtonDietStatus}
        type={
          parseFloat(
            calculateDietCompliancePercentage(meals).replace(",", ".")
          ) >= 50
            ? "PRIMARY"
            : "SECONDARY"
        }
        textStatus={`${calculateDietCompliancePercentage(meals)}%`}
        subTextStatus="das refeições dentro da dieta"
        icon="arrow-up-right"
      />

      <Text>Refeições</Text>
      <Button
        title="Nova refeição"
        icon="plus"
        onPress={handleButtonMealCreation}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={groupedMeals}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <ButtonMealItem
              time={item.hour}
              title={item.name}
              type={item.type}
              onPress={() => handleButtonMealItem(item)}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Title>{title}</Title>
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Não há refeições registradas" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            groupedMeals.length === 0 && { flex: 1 },
          ]}
        />
      )}
    </Container>
  );
}
