import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/auth/authSelectors";
import sprite from "../../images/sprite.svg";
import {
  AuthNavContainer,
  ButtonWrap,
  LogInBtn,
  LogOutBtn,
  RegisterBtn,
} from "./AuthNav.styled";

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AuthNavContainer>
      {isLoggedIn ? (
        <ButtonWrap>
          <svg width="20" height="20" fill="#e0a39a">
            <use href={`${sprite}#log-out`} />
          </svg>
          <LogOutBtn type="button">Log out</LogOutBtn>
        </ButtonWrap>
      ) : (
        <>
          <ButtonWrap>
            <svg width="20" height="20">
              <use href={`${sprite}#log-in`} />
            </svg>
            <LogInBtn type="button">Log in</LogInBtn>
          </ButtonWrap>
          <RegisterBtn type="button">Registration</RegisterBtn>
        </>
      )}
    </AuthNavContainer>
  );
};

export default AuthNav;
