import {
  Container,
  Icon,
  StatisticsHeaderTypeStyleProps,
  SubTextStatus,
  TextStatus,
} from "./styles";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  type?: StatisticsHeaderTypeStyleProps;
  icon?: keyof typeof Feather.glyphMap;
  onPress?: () => void;
  textStatus: string;
  subTextStatus: string;
};

export function StatisticsHeader({
  type = "PRIMARY",
  icon,
  onPress,
  textStatus,
  subTextStatus,
}: Props) {
  return (
    <Container type={type}>
      {icon && <Icon onPress={onPress} name={icon} type={type} />}
      <TextStatus>{textStatus}</TextStatus>
      <SubTextStatus>{subTextStatus}</SubTextStatus>
    </Container>
  );
}
