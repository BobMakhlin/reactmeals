import { useCallback, useState } from "react";
import CartModal from "./components/Cart/CartModal";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartModalIsShown, setCartModalIsShown] = useState(false);

  const showCartModal = useCallback(() => {
    setCartModalIsShown(true);
  }, []);
  const hideCartModal = useCallback(() => {
    setCartModalIsShown(false);
  }, []);

  return (
    <>
      {cartModalIsShown && <CartModal onClose={hideCartModal} />}
      <Header onShowCart={showCartModal} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
