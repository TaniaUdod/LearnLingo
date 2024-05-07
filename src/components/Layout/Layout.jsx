import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/auth/authSelectors";
import AuthNav from "../AuthNav/AuthNav";
import Loader from "../Loader/Loader";

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <img src="" alt="Logo" width={28} height={28} />
            <p>LearnLingo</p>
          </Link>
          <Link to="/">Home</Link>
          <Link to="/teachers">Teachers</Link>
          {isLoggedIn && <Link to="/favorites">Favorites</Link>}
        </nav>
        <AuthNav />
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
