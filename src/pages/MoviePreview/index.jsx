import { FiArrowLeft, FiClock } from "react-icons/fi"
import { BiStar, BiSolidStar} from "react-icons/bi"
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container, Nav, Content } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function MoviePreview() {
  const [data, setData] = useState(null); 
  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl); 
  
  const {movieNote_id} = useParams(); 

  const navigate = useNavigate(); 

  function handleBack() {
    navigate(-1);
  };

  function starNumber(rating){
    switch (Number(rating)){
      case 1:
        return (
          <>
            <BiSolidStar />
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />     
          </>
        );
        break
      case 2:
        return (
          <>
            <BiSolidStar />
            <BiSolidStar />
            <BiStar />
            <BiStar />
            <BiStar />     
          </>
        );
        break
      case 3:
        return (
          <>
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiStar />
            <BiStar />     
          </>
        );
        break
      case 4:
        return (
          <>
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiStar />     
          </>
        );
        break
      case 5:
        return (
          <>
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />     
          </>
        );
        break
      default:
      break
    }
  };

  function showDataTime(data){
    const dataTime = data.split(" ").join(" às ");
    return dataTime;
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/movies/${movieNote_id}`);
      setData(response.data);
    };
    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      <Nav>
        <ButtonText 
          value="Voltar" 
          icon={FiArrowLeft} 
          onClick={handleBack}
        />
      </Nav>
  
      {
        data &&
        <Content>
          <span>
            <h1>{data.title}</h1>
            {starNumber(data.rating)}
          </span>

          <span>
            <img 
              src={avatar} 
              alt={user.name}
            />
            <strong>{`Por ${user.name}`}</strong>
            <FiClock />
            <p>{showDataTime(data.created_at)}</p>
          </span>
          
          { 
            data.tags &&
            <span> 
              {
                data.tags.map(tag => 
                  <Tag 
                    key={ tag.id } 
                    title={ tag.name } 
                  />
                )
              }
            </span> 
          }
          
          <div>
            <p>{data.description}</p>
          </div>        

        </Content>
        }
     



    </Container>
  );
};