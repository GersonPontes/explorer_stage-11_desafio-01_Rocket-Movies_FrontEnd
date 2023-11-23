import { useState } from "react";
import { FiMail, FiLock} from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { Container, Content, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({email, password});
  }

  return (
    <Container>
      <Content>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Faça seu login</h2>
        
          <Input 
            placeholder="E-mail" 
            type="text" icon={FiMail} 
            onChange= {e => setEmail(e.target.value)} 
          />
          <Input 
            placeholder="Senha" 
            type="password"
            icon={FiLock} 
            onChange= {e => setPassword(e.target.value)} 
          />
          <Button value="Entrar" 
            onClick={handleSignIn} 
          />
          <ButtonText value="Criar conta" to="/register"/>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};