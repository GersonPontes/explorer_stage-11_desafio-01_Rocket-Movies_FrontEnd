import { Container } from "./styles"

export function ButtonText({ icon: Icon, value, to, ...rest }) {
  return (
    <Container to={to} {...rest}>
      {Icon && <Icon size={16} />}
      {value}
    </Container>
  );
};