import { TouchableOpacityProps } from "react-native";
import {
  ButtonMealItemTypeStyleProps,
  Container,
  Divider,
  Status,
  TimeText,
  Title,
} from "./styles";

type Props = TouchableOpacityProps & {
  time: string;
  title: string;
  type?: ButtonMealItemTypeStyleProps;
};

export function ButtonMealItem({
  time,
  title,
  type = "PRIMARY",
  ...rest
}: Props) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <TimeText>{time}</TimeText>
      <Divider />
      <Title>{title}</Title>
      <Status type={type} />
    </Container>
  );
}
