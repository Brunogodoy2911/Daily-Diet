import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@components/Button";

import {
  Container,
  FeedbackTypeStyleProps,
  StyledImage,
  SubTitle,
  Title,
} from "./styles";

import Illustration from "@images/Illustration.png";
import Illustration2 from "@images/Illustration2.png";

type RouteParams = {
  selectedOption: FeedbackTypeStyleProps;
};

interface FeedbackMessage {
  title: string;
  subtitle: string;
}

const FEEDBACK_MESSAGES: Record<FeedbackTypeStyleProps, FeedbackMessage> = {
  PRIMARY: {
    title: "Continue assim!",
    subtitle: "Você continua dentro da dieta. Muito bem!",
  },
  SECONDARY: {
    title: "Que pena!",
    subtitle:
      "Você saiu da dieta dessa vez, mas continue \n se esforçando e não desista!",
  },
};

export function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();

  const { selectedOption } = route.params as RouteParams;

  const feedback = FEEDBACK_MESSAGES[selectedOption];

  const subtitleParts =
    selectedOption === "SECONDARY"
      ? feedback.subtitle.split("saiu da dieta")
      : [feedback.subtitle];

  function handleBack() {
    navigation.navigate("meals");
  }

  return (
    <Container>
      <Title type={selectedOption}>{feedback.title}</Title>

      <SubTitle>
        {selectedOption === "PRIMARY" ? (
          <>
            Você continua <SubTitle isBold>dentro da dieta</SubTitle>. Muito
            bem!
          </>
        ) : (
          <>
            {subtitleParts[0]}
            <SubTitle isBold>saiu da dieta</SubTitle>
            {subtitleParts[1]}
          </>
        )}
      </SubTitle>

      <StyledImage
        source={selectedOption === "PRIMARY" ? Illustration : Illustration2}
      />

      <Button
        title="Ir para a página inicial"
        onPress={handleBack}
        style={{
          width: 191,
        }}
      />
    </Container>
  );
}
