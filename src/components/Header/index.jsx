import { Container, Brand, Search, Profile } from "./styles";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

export function Header({ search, setSearch }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const handleSearch = useCallback(event => {
    setSearch(event.target.value)
  }, [setSearch])

  function handleSignOut() {
    navigate("/");
    signOut();
  };

  function handleProfile() {
    navigate("/profile");
  };

  return (
    <Container>
      
      <Brand to="/" >
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título" 
          type="text" 
          onChange={handleSearch}
        />
      </Search>

      <Profile>
        <div>
          <strong onClick={handleProfile}>{user.name}</strong>
          <span onClick={handleSignOut}>sair</span>
        </div>

        <img 
          src={avatarUrl}
          alt={user.name} 
          onClick={handleProfile}
        />
      </Profile>
      
    </Container>
  );
};