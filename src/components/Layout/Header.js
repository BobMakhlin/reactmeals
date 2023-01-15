import classes from './Header.module.css';
import mealsImage from "../../assets/meals.jpg";
import CartButton from './CartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
