import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/auth/authSelectors";

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <button type="submit">Log out</button>
      ) : (
        <>
          <button type="submit">Log in</button>
          <button type="submit">Registration</button>
        </>
      )}
    </>
  );
};

export default AuthNav;
