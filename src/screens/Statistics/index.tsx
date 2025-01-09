import { useCallback, useState } from "react";
import { Alert } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { Container, Content, Row, Title } from "./styles";

import { StatisticsHeader } from "@components/HeaderStatistics";
import { CardStastics } from "@components/CardStatistics";

import {
  statisticsGetAll,
  StatisticsType,
} from "@storage/statistics/statisticsGetAll";
import { getDietType } from "@utils/dietUtils";

type RouteParams = {
  dietPercentage: string;
};

export function Statistics() {
  const [statistics, setStatistics] = useState<StatisticsType>();

  const navigation = useNavigation();
  const route = useRoute();

  const { dietPercentage } = route.params as RouteParams;

  const type = getDietType(dietPercentage);

  function handleBack() {
    navigation.navigate("meals");
  }

  async function fetchStatistics() {
    try {
      const data = await statisticsGetAll();
      setStatistics(data);
    } catch (error) {
      Alert.alert("Refeições", "Não foi possível carregar as estatísticas!");
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
    }, [])
  );

  return (
    <Container type={type}>
      <StatisticsHeader
        icon="arrow-left"
        onPress={handleBack}
        textStatus={`${dietPercentage}%`}
        type={type}
        subTextStatus="das refeições dentro da dieta"
      />

      <Content>
        <Title>Estatísticas gerais</Title>

        <CardStastics
          textStatus={`${statistics?.bestSequenceInDiet}`}
          subTextStatus="melhor sequência de pratos dentro da dieta"
        />
        <CardStastics
          textStatus={`${statistics?.totalMeals}`}
          subTextStatus="refeições registradas"
        />

        <Row>
          <CardStastics
            type="MINI_PRIMARY"
            textStatus={`${statistics?.mealsInDiet}`}
            subTextStatus="refeições dentro da dieta"
          />
          <CardStastics
            type="MINI_SECONDARY"
            textStatus={`${statistics?.mealsOutDiet}`}
            subTextStatus="refeições fora da dieta"
          />
        </Row>
      </Content>
    </Container>
  );
}
