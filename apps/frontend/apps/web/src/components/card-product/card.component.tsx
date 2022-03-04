// Depedencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import { Container } from './card.styles';

// Assets
import { faFaceFrown, faGrinStars } from '@fortawesome/free-solid-svg-icons';

// Utils
import { ICardProps } from '../../utils/models/card.model';

toast.configure();

const Card: React.FC<ICardProps> = ({
  title,
  description,
  text,
  thumbnail,
}) => {
  // const [favorite, setFavorite] = useState<boolean>(false);
  const isLogged = false;

  const handleToggleFavorite = () => {
    // setFavorite((previous) => !previous)

    if (!isLogged) {
      toast.warn('Necessário estar logado!', {
        theme: 'colored',
        transition: Zoom,
      });
    } else {
      toast.success('Favoritado com sucesso!', {
        theme: 'colored',
        transition: Zoom,
      });
    }
  };

  return (
    <Container>
      <ToastContainer draggable={true} />

      <img src={thumbnail} alt="" className="image" />

      <div className="content">
        <h2>{title}</h2>

        <p className="description">{description}</p>

        <p className="favorite" onClick={handleToggleFavorite}>
          {text}
          <FontAwesomeIcon icon={isLogged ? faGrinStars : faFaceFrown} />
        </p>
      </div>
    </Container>
  );
};

export default Card;
