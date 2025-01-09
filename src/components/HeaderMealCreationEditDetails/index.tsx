import {
  Container,
  HeaderMealCreationEditDetailsTypeStyleProps,
  Icon,
  Title,
} from "./styles";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  type?: HeaderMealCreationEditDetailsTypeStyleProps;
  icon: keyof typeof Feather.glyphMap;
  onPress: () => void;
  title: string;
};
export function HeaderMealCreationEditDetails({
  type = "DEFAULT",
  icon,
  onPress,
  title,
}: Props) {
  return (
    <Container type={type}>
      <Icon onPress={onPress} name={icon} />
      <Title>{title}</Title>
    </Container>
  );
}
