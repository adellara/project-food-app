import React, {Fragment,useState} from "react";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./storred/CartProvider";

function App() {
  const [isCartVisible,setIsCartVisible]=useState(false);

  const showCartHandler = ()=> {
    setIsCartVisible(true);
  }

  const hideCartHandler = () => {
    setIsCartVisible(false);
  }

  return (
    <CartProvider>
      {isCartVisible && <Cart onClick={hideCartHandler}/>}
      <Header onShowHandler={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
