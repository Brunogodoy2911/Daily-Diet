import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

import { Column, Container, Content, Row, Scroll, Title } from "./styles";

import { HeaderMealCreationEditDetails } from "@components/HeaderMealCreationEditDetails";
import { Input } from "@components/Input";
import { ToggleOption } from "@components/ToggleOption";
import { Button } from "@components/Button";
import { AppError } from "@utils/AppError";
import { mealCreate } from "@storage/meal/mealCreate";
import { mealEdit } from "@storage/meal/mealEdit";

type RouteParams = {
  id: string;
  mealName: string;
  mealDescription: string;
  mealDate: string;
  mealHour: string;
  type: "PRIMARY" | "SECONDARY";
  title: string;
};

export function MealCreation() {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    id,
    mealName = "",
    mealDescription = "",
    mealDate = "",
    mealHour = "",
    type,
    title,
  } = route.params as RouteParams;

  const [formData, setFormData] = useState({
    name: mealName,
    description: mealDescription,
    date: mealDate,
    hour: mealHour,
    type: type,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  const validateFields = () => {
    const { name, description, date, hour, type } = formData;

    if (!name.trim() || !description.trim() || !date.trim() || !hour.trim()) {
      throw new AppError("Por favor, preencha todos os campos!");
    }

    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dateRegex.test(date)) {
      throw new AppError("Data inválida. Use o formato DD/MM/AAAA.");
    }

    const hourRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!hourRegex.test(hour)) {
      throw new AppError("Hora inválida. Use o formato HH:mm.");
    }

    if (!type) {
      throw new AppError(
        "Por favor, selecione se está dentro da dieta ou não!"
      );
    }
  };

  const handleSave = async () => {
    try {
      validateFields();

      if (title === "Editar refeição") {
        await mealEdit({ id, ...formData });
        navigation.navigate("meals");
      } else {
        await mealCreate({ id, ...formData });
        navigation.navigate("feedback", { selectedOption: formData.type });
      }
    } catch (error) {
      const message =
        error instanceof AppError
          ? error.message
          : "Ocorreu um erro inesperado.";
      Alert.alert("Erro", message);
    }
  };

  return (
    <Container>
      <HeaderMealCreationEditDetails
        title={title}
        onPress={() => navigation.navigate("meals")}
        icon="arrow-left"
      />

      <Content>
        <Scroll showsVerticalScrollIndicator={false}>
          <Title>Nome</Title>
          <Input
            value={formData.name}
            onChangeText={(value) => handleInputChange("name", value)}
            placeholder="Sanduíche"
          />

          <Title>Descrição</Title>
          <Input
            value={formData.description}
            onChangeText={(value) => handleInputChange("description", value)}
            type="DESCRIPTION"
            multiline
            placeholder="Sanduíche de pão integral com atum e salada de alface e tomate"
          />

          <Row>
            <Column>
              <Title>Data</Title>
              <Input
                value={formData.date}
                onChangeText={(value) => handleInputChange("date", value)}
                placeholder="12/08/2022"
              />
            </Column>

            <Column>
              <Title>Hora</Title>
              <Input
                value={formData.hour}
                onChangeText={(value) => handleInputChange("hour", value)}
                placeholder="16:00"
              />
            </Column>
          </Row>

          <Title>Está dentro da dieta?</Title>
          <Row>
            <ToggleOption
              title="Sim"
              isSelected={formData.type === "PRIMARY"}
              onPress={() => handleInputChange("type", "PRIMARY")}
            />
            <ToggleOption
              title="Não"
              type="SECUNDARY"
              isSelected={formData.type === "SECONDARY"}
              onPress={() => handleInputChange("type", "SECONDARY")}
            />
          </Row>

          <Button
            title={
              title === "Editar refeição"
                ? "Salvar alterações"
                : "Cadastrar refeição"
            }
            onPress={handleSave}
          />
        </Scroll>
      </Content>
    </Container>
  );
}
