import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/auth/authSelectors";
import AuthNav from "../AuthNav/AuthNav";
import Loader from "../Loader/Loader";
import sprite from "../../images/sprite.svg";
import { Header, LinkStyled, LogoText, LogoWrap, Nav } from "./Layout.styled";

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>
        <Link to="/">
          <LogoWrap>
            <svg width="28" height="28">
              <use href={`${sprite}#logo`} />
            </svg>
            <LogoText>LearnLingo</LogoText>
          </LogoWrap>
        </Link>
        <Nav>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/teachers">Teachers</LinkStyled>
          {isLoggedIn && <LinkStyled to="/favorites">Favorites</LinkStyled>}
        </Nav>
        <AuthNav />
      </Header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
