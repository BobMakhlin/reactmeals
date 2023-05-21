import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useMeals from "../../hooks/use-meals";

const AvailableMeals = () => {
  const { meals, isLoading, error } = useMeals();
  let content;

  if (error) {
    content = <p>An error has occurred</p>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = meals.map((item) => (
      <MealItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    ));
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
