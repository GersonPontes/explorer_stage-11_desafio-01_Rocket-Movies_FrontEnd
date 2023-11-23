import { useState, useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Section, Content } from "./styles";
import { Header } from "../../components/Header";
import { MovieNote } from "../../components/MovieNote";
import { Button } from "../../components/Button";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("")

  const navigate = useNavigate ();

  function handleDetails(id) {
    navigate(`/preview/${id}`);
  };

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movies?title=${search}`);
      setNotes(response.data);
    };
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />

      <Section>
        <h1>Meus filmes</h1>
        <Button value="Adicionar filme" icon={BiPlus} to="/new" />
      </Section>

      <Content>
        {
          notes.map(note => (
            <MovieNote
              key= {String(note.id)}
              data= {note}
              onClick={() => handleDetails(note.id)}
            />
          ))
        }
      </Content>
     
    </Container>
  );
};