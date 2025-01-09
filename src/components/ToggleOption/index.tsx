import { TouchableOpacityProps } from "react-native";
import { Container, Dot, Title, ToggleOptionTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ToggleOptionTypeStyleProps;
  isSelected?: boolean;
  title: string;
};

export function ToggleOption({
  isSelected = false,
  type = "PRIMARY",
  title,
  ...rest
}: Props) {
  return (
    <Container type={type} isSelected={isSelected} {...rest}>
      <Dot type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
