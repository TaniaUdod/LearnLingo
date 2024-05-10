import { useEffect } from "react";
import { createPortal } from "react-dom";
import sprite from "../../images/sprite.svg";
import { CloseButton, ModalContent, ModalOverlay } from "./Modal.styled";

const Modal = ({ onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
      document.body.style.overflow = "visible";
    }
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={handleClose}>
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};

export default Modal;
