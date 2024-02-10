import React, { useContext } from 'react';
import { LuShoppingCart } from 'react-icons/lu';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart__button"
      onClick={ () => setIsCartVisible(!isCartVisible) }
    >
      <LuShoppingCart />
      { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
    </button>
  );
}

export default CartButton;
