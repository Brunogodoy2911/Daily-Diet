import { Avatar, Container, Logo } from "./styles";

import logoImg from "@images/logo.png";
import avatarImg from "@images/avatarImg.png";
export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Avatar source={avatarImg} />
    </Container>
  );
}
