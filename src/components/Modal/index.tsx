import { Modal as NativeModal, ModalProps, Pressable } from "react-native";
import { Container, Content, Row, Title } from "./styles";

import { Button } from "@components/Button";

type Props = ModalProps & {
  onClose: () => void;
  mealRemove: () => void;
};

export function Modal({ onClose, mealRemove, ...rest }: Props) {
  return (
    <NativeModal transparent animationType="fade" {...rest}>
      <Pressable
        style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onPress={onClose}
      >
        <Container>
          <Pressable>
            <Content>
              <Title>
                Deseja realmente excluir o {"\n"} registro da refeição?
              </Title>
              <Row>
                <Button
                  title="Cancelar"
                  type="SECONDARY"
                  style={{ flex: 1 }}
                  onPress={onClose}
                />
                <Button
                  title="Sim, excluir"
                  style={{ flex: 1 }}
                  onPress={mealRemove}
                />
              </Row>
            </Content>
          </Pressable>
        </Container>
      </Pressable>
    </NativeModal>
  );
}
