import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop} />;
};
const ModalOverlay = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};

const overlayEl = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClick={props.onClose} />, overlayEl)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayEl)}
    </>
  );
};

export default Modal;
