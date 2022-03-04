import { Navigate, Route, Routes } from 'react-router-dom';

// Pages
import Dashboard from '../pages/dashboard/dashboard.component';
import Favorites from '../pages/favorites/favorites.component';

// Routes
import RoutesPrivate from './RoutesPrivate';

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />

      <Route path="/" element={<Navigate replace to="/home" />} />

      <Route
        path="/home"
        element={
          <RoutesPrivate>
            <Dashboard />
          </RoutesPrivate>
        }
      />

      <Route
        path="/favorites"
        element={
          <RoutesPrivate>
            <Favorites />
          </RoutesPrivate>
        }
      />

      {/* <Route path="/register-products" element={<RoutesPrivate><RegisterProducts /></RoutesPrivate>} /> */}
    </Routes>
  );
};

export default DefaultRoutes;
