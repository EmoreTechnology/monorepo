// Dependencies
import React from 'react';
import Accordeon from '../../components/accordeon/accordeon.component';

// Components
import Navbar from '../../components/navbar/navbar.component';
import { accordionData } from '../../utils/mocks/accordeon.mock';

// Styles
import { Container } from './favorites.style';

const Favorites: React.FC = () => {
  function returnFavorites(value: any) {
    if (value.favorites === 'FAVORITE') return value;
  }

  const produtosFavoritos = accordionData.filter(returnFavorites);

  function returnNoFavorites(value: any) {
    if (value.favorites === 'NOFAVORITE') return value;
  }
  const produtosNaoFavoritos = accordionData.filter(returnNoFavorites);

  return (
    <Container>
      <Navbar />

      <div className="container">
        <div className="wrapper">
          <p>{produtosFavoritos.length}</p>

          <p>{produtosNaoFavoritos.length}</p>
        </div>

        {accordionData.map((item) => (
          <Accordeon
            key={item.id}
            favorite={item.favorite}
            productTitle={item.productTitle}
            id={item.id}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default Favorites;
