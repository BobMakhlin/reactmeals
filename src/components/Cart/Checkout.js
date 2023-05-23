import { useCallback, useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isPostalCode = (value) => value.length === 5;

const Checkout = ({ onCancel, onSubmit }) => {
  const [formErrors, setFormErrors] = useState({
    name: null,
    street: null,
    postalCode: null,
    city: null,
  });
  const nameRef = useRef(null);
  const streetRef = useRef(null);
  const postalRef = useRef(null);
  const cityRef = useRef(null);

  const confirmHandler = useCallback(
    (event) => {
      event.preventDefault();

      const name = nameRef.current.value;
      const street = streetRef.current.value;
      const postalCode = postalRef.current.value;
      const city = cityRef.current.value;

      const nameIsValid = !isEmpty(name);
      const streetIsValid = !isEmpty(street);
      const postalCodeIsValid = isPostalCode(postalCode);
      const cityIsValid = !isEmpty(city);

      setFormErrors({
        name: nameIsValid ? null : "Name is required",
        street: streetIsValid ? null : "Street is required",
        postalCode: postalCodeIsValid ? null : "Postal code is invalid",
        city: cityIsValid ? null : "City is required",
      });

      const formIsValid =
        nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

      if (!formIsValid) {
        return;
      }

      onSubmit({
        name,
        street,
        postalCode,
        city,
      });
    },
    [onSubmit]
  );

  const nameClasses = `${classes.control} ${
    formErrors.name ? classes.invalid : ""
  }`;
  const streetClasses = `${classes.control} ${
    formErrors.street ? classes.invalid : ""
  }`;
  const postalCodeClasses = `${classes.control} ${
    formErrors.postalCode ? classes.invalid : ""
  }`;
  const cityClasses = `${classes.control} ${
    formErrors.city ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameRef} type="text" id="name" />
        {formErrors.name && <p>{formErrors.name}</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetRef} type="text" id="street" />
        {formErrors.street && <p>{formErrors.street}</p>}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalRef} type="text" id="postal" />
        {formErrors.postalCode && <p>{formErrors.postalCode}</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityRef} type="text" id="city" />
        {formErrors.city && <p>{formErrors.city}</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
