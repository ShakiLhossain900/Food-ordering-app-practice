import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Carts/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };
  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;


//there is problem when i clicked the button that time 
//value card y jacce na
//upto video 11 is clear     
//tonight target for finishing this project 
//next run to the next  module 12 and go faster than other day as well 
///after this run to the next module and if facing any problem check and solve from youtube
//every day normal contribution will more than 6<contribution 