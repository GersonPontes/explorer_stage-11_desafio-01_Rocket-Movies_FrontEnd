import { FiArrowLeft } from "react-icons/fi"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api"
import { Container, Nav, Content, Form, MovieTags } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { ButtonDark } from "../../components/ButtonDark"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { MovieItem } from "../../components/MovieItem"

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  
  const navigate = new useNavigate(); 

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  };

  async function handleNewNote() {
    if(!title) {
      return alert("Digite o título do filme");
    };
    if(!rating) {
      return alert("Digite a nota do Filme");
    };
    if(isNaN(rating)) {
      return alert("Digite um numero de 1 a 5 para a nota do filme");
    };
    if(!description) {
      return alert("Digite um descrição para o filme");
    };

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique em adicionar ou deixe o campo vazio");
    };

    if(tags[0] == undefined) {
      return alert("Adicione pelo menos 1 marcador ao filme");
    };
    
    await api.post("/movies", {
      title,
      description,
      rating,
      tags      
    });
    alert("Nota criada com sucesso!");
    handleBack();
  };

  function handleBack() {
    navigate(-1);
  };

  return (
    <Container>
      <Header />

      <Nav>
        <ButtonText value="Voltar" icon={FiArrowLeft} to="/" />
      </Nav>
      
      <Content>
        <Form>
          <h1>Novo filme</h1>
          <div>
            <Input 
              placeholder="Título" 
              type="text" 
              onChange={(e => setTitle(e.target.value))}
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)" 
              type="text" 
              maxLength="1" 
              onChange={(e => setRating(e.target.value))}
            />
          </div>
          <Textarea 
            placeholder="Observações" 
            onChange={(e => setDescription(e.target.value))}
          />

          <h2>Marcadores</h2>

          <MovieTags>
            {
              tags.map(( tag, index ) => (
                <MovieItem
                  key={String(index)} 
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <MovieItem
              isNew
              placeholder="Novo marcador"
              value= {newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </MovieTags>

          <div>
            <ButtonDark value="Excluir filme" />
            <Button 
              value="Salvar alterações"
              onClick={handleNewNote} 
            />
          </div>

        </Form>
      </Content>
    </Container>
  );
};