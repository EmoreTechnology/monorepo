// Dependencies
import React from 'react';
import Card from '../../components/card-product/card.component';

// Components
import Navbar from '../../components/navbar/navbar.component';

// Styles
import { Container } from './dashboard.styles';

// Utils
import { cardProps } from '../../utils/mocks/card.mock';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Navbar />

      <div className="container">
        <h2>Produtos</h2>

        <div className="content">
          {cardProps.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
