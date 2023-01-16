import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const jsx = (
    <div className={classes.backdrop}>
      <div className={classes.modal}>{props.children}</div>
    </div>
  );

  return createPortal(jsx, document.getElementById("overlay"));
};

export default Modal;
