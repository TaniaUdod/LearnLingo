import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { removeUser } from "../../store/auth/authSlice";
import { selectIsLoggedIn } from "../../store/auth/authSelectors";
import Modal from "../Modal/Modal";
import LogInForm from "../LogInForm/LogInForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import sprite from "../../images/sprite.svg";
import toast from "react-hot-toast";
import {
  AuthNavContainer,
  ButtonWrap,
  LogBtn,
  RegisterBtn,
} from "./AuthNav.styled";

const AuthNav = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveForm(null);
  };

  const openLoginForm = () => {
    setActiveForm("login");
    openModal();
  };

  const openRegisterForm = () => {
    setActiveForm("register");
    openModal();
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => toast.success("You have successfully logged out"))
      .catch((error) => console.log(error));
    dispatch(removeUser());
  };

  return (
    <AuthNavContainer>
      {isLoggedIn ? (
        <ButtonWrap onClick={handleLogOut}>
          <svg width="20" height="20" fill="#e0a39a">
            <use href={`${sprite}#log-out`} />
          </svg>
          <LogBtn type="button">Log out</LogBtn>
        </ButtonWrap>
      ) : (
        <>
          <ButtonWrap onClick={openLoginForm}>
            <svg width="20" height="20">
              <use href={`${sprite}#log-in`} />
            </svg>
            <LogBtn type="button">Log in</LogBtn>
          </ButtonWrap>
          <RegisterBtn type="button" onClick={openRegisterForm}>
            Registration
          </RegisterBtn>
        </>
      )}

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {activeForm === "login" && <LogInForm onClose={closeModal} />}
          {activeForm === "register" && <RegisterForm onClose={closeModal} />}
        </Modal>
      )}
    </AuthNavContainer>
  );
};

export default AuthNav;
