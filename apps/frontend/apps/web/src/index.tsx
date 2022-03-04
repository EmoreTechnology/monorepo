// Dependencies
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Style
import './index.css';

// Routes
import DefaultRoutes from './routes/defaultRoutes';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <DefaultRoutes />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
