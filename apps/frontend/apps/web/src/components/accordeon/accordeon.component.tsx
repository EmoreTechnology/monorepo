// Dependencies
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Assets
import { faFaceFrown, faGrinStars } from '@fortawesome/free-solid-svg-icons';

// Styles
import { Container } from './accordeon.styles';

// Utils
import { IAccordeonProps } from '../../utils/models/accordion.model';

const Accordeon: React.FC<IAccordeonProps> = ({
  favorite,
  id,
  productTitle,
  description,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <div className="accordion-item">
        <div
          className={isActive ? `accordion-title-active` : 'accordion-title'}
          onClick={() => setIsActive(!isActive)}
        >
          <p>{id}</p>

          <p>{productTitle}</p>

          <p className="favorite">
            Favorito
            <FontAwesomeIcon icon={favorite ? faGrinStars : faFaceFrown} />
          </p>

          <p>{isActive ? '-' : '+'}</p>
        </div>

        {isActive && (
          <div className="accordion-content">
            <p>Descrição: {description}</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Accordeon;
