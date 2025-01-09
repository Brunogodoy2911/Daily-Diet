import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  Content,
  Dot,
  Footer,
  MealDetailsTypeStyleProps,
  MiniTitle,
  SubTitle,
  Tag,
  TextTag,
  Title,
} from "./styles";

import { Button } from "@components/Button";
import { Modal } from "@components/Modal";
import { HeaderMealCreationEditDetails } from "@components/HeaderMealCreationEditDetails";

import { mealRemoveByName } from "@storage/meal/mealRemoveByName";

type RouteParams = {
  id: string;
  mealName: string;
  mealDescription: string;
  mealDate: string;
  mealHour: string;
  type: MealDetailsTypeStyleProps;
};

const TAG_MESSAGES: Record<MealDetailsTypeStyleProps, string> = {
  PRIMARY: "dentro da dieta",
  SECONDARY: "fora da dieta",
  "": "sem tipo",
};

export function MealDetails() {
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { id, mealName, mealDescription, mealDate, mealHour, type } =
    route.params as RouteParams;

  const tagMessage = TAG_MESSAGES[type];

  const navigateToMeals = () => navigation.navigate("meals");

  const navigateToEditMeal = () => {
    navigation.navigate("mealCreation", {
      id,
      mealName,
      mealDescription,
      mealDate,
      mealHour,
      type,
      title: "Editar refeição",
    });
  };

  const handleModalVisibility = (visible: boolean) => setModalVisible(visible);

  const handleMealRemove = async () => {
    try {
      await mealRemoveByName(id);
      navigateToMeals();
    } catch (error) {
      Alert.alert("Remover Refeição", "Não foi possível remover a refeição!");
      console.error(error);
    }
  };

  return (
    <Container type={type}>
      <HeaderMealCreationEditDetails
        type={type}
        icon="arrow-left"
        title="Refeição"
        onPress={navigateToMeals}
      />

      <Content>
        <Title>{mealName}</Title>
        <SubTitle>{mealDescription}</SubTitle>

        <MiniTitle>Data e Hora</MiniTitle>
        <SubTitle>
          {mealDate} às {mealHour}
        </SubTitle>

        <Tag>
          <Dot type={type} />
          <TextTag type={type}>{tagMessage}</TextTag>
        </Tag>

        <Footer>
          <Button
            icon="edit-3"
            title="Editar refeição"
            onPress={navigateToEditMeal}
          />
          <Button
            type="SECONDARY"
            icon="trash-2"
            title="Excluir refeição"
            onPress={() => handleModalVisibility(true)}
          />
        </Footer>
      </Content>

      <Modal
        visible={isModalVisible}
        onClose={() => handleModalVisibility(false)}
        mealRemove={handleMealRemove}
      />
    </Container>
  );
}
