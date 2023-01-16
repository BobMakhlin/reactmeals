import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import CartButton from "./CartButton";
import CartModal from "../Cart/CartModal";
import { useCallback, useState } from "react";

const Header = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModal = useCallback(() => {
    setModalIsVisible(true);
  }, []);
  const hideModal = useCallback(() => {
    setModalIsVisible(false);
  }, []);

  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={showModal} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals" />
      </div>
      {modalIsVisible && <CartModal onClose={hideModal} />}
    </>
  );
};

export default Header;
