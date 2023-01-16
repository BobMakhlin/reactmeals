import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};
const ModalOverlay = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};

const overlayEl = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />, overlayEl)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayEl)}
    </>
  );
};

export default Modal;
