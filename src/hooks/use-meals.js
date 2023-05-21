import { onValue, ref } from "firebase/database";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";

const useMeals = () => {
  const [meals, setMeals] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = ref(db, "meals");
    const unsubscribeFn = onValue(
      query,
      (snapshot) => {
        const data = snapshot.val();
        const meals = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
        setMeals(meals);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      },
      {
        onlyOnce: true,
      }
    );

    return unsubscribeFn;
  }, []);

  return { meals, isLoading, error };
};

export default useMeals;
