import { TouchableOpacityProps } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import {
  Container,
  Icon,
  SubTextStatus,
  TextStatus,
  ButtonDietStatusTypeStyleProps,
} from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonDietStatusTypeStyleProps;
  icon?: keyof typeof Feather.glyphMap;
  textStatus: string;
  subTextStatus: string;
};

export function ButtonDietStatus({
  type = "PRIMARY",
  icon,
  textStatus,
  subTextStatus,
  ...rest
}: Props) {
  return (
    <Container activeOpacity={0.8} type={type} {...rest}>
      {icon && <Icon name={icon} type={type} />}
      <TextStatus>{textStatus}</TextStatus>
      <SubTextStatus>{subTextStatus}</SubTextStatus>
    </Container>
  );
}
