import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from "./styles";

export function MovieItem({ value, isNew, onClick, ...rest }) {
  return (
    <Container
      $isnew={isNew}
    >
      <input
        {...rest}
        type="text"
        value={value}
        readOnly={!isNew}
        className={isNew ? 'button-add' : 'button-delete'}
      />

      <button 
        type="button" 
        onClick= {onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
   </Container>
  );
};