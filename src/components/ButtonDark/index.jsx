import { Container } from "./styles";

export function ButtonDark({ icon: Icon, value }) {
  return (
    <Container
      type="button"
    >
      { Icon && <Icon size={20} />}

      { value }
  
    </Container>
  );
};