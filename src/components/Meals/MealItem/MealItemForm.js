import { useCallback, useRef, useState } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const { onSubmit, id } = props;

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit({ amount: +amountInputRef.current.value });
    },
    [onSubmit]
  );

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${id}`,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
          required: true,
        }}
      />
      <Button>+ Add</Button>
    </form>
  );
};

export default MealItemForm;
