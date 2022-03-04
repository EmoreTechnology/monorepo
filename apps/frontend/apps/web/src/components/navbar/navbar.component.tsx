//Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Styles
import { Container } from './navbar.styles';

// Assets
import user from '../../assets/user.png';

toast.configure();

const Navbar: React.FC = () => {
  const isLogged = true;

  const navigate = useNavigate();

  const handleFavoritesPage = () => {
    if (isLogged) {
      navigate('/favorites');
    } else {
      toast.warn('Necessário estar logado!', {
        theme: 'colored',
        transition: Zoom,
      });
    }
  };

  return (
    <>
      <ToastContainer className={'colored'} />
      <Container>
        <div>
          <a href="/home">Home</a>

          <p onClick={handleFavoritesPage}>Favoritos</p>

          <div className="user">
            <img src={user} alt="" />

            <p>Sair</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
