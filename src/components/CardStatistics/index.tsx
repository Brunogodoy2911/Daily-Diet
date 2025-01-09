import {
  CardStatisticsTypeStyleProps,
  Container,
  SubTextStatus,
  TextStatus,
} from "./styles";

type Props = {
  type?: CardStatisticsTypeStyleProps;
  textStatus: string;
  subTextStatus: string;
};

export function CardStastics({
  type = "DEFAULT",
  textStatus,
  subTextStatus,
}: Props) {
  return (
    <Container type={type}>
      <TextStatus numberOfLines={1}>{textStatus}</TextStatus>
      <SubTextStatus numberOfLines={2}>{subTextStatus}</SubTextStatus>
    </Container>
  );
}
