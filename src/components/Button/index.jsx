import { Container } from "./styles";

export function Button({ icon: Icon, value, to, ...rest }) {
  return (
    <Container
      type="button"
      to={to}
      {...rest}
    >
      { Icon && <Icon size={20} />}

      { value }
  
    </Container>
  );
};