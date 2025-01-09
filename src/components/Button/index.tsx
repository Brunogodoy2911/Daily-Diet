import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";
import Feather from "@expo/vector-icons/Feather";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: keyof typeof Feather.glyphMap;
};

export function Button({ title, type = "PRIMARY", icon, ...rest }: Props) {
  return (
    <Container activeOpacity={0.8} type={type} {...rest}>
      {icon && <Icon name={icon} type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
