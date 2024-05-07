import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { PrivateRoute } from "../components/PrivateRoute";
import Layout from "../components/Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const Teachers = lazy(() => import("../pages/Teachers/Teachers"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));

const App = () => {
  useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route
          path="/favorites"
          element={<PrivateRoute redirectTo="/" component={<Favorites />} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
