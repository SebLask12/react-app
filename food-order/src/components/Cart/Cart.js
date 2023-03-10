import { useContext } from 'react';

import classes from './Cart.module.css';

import CartItem from './CartItem';

import Modal from './../UI/Modal';
import CartContext from '../../store/cart-context';

const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext);

  const closeHandler = () => {
    console.log('close');
    onCloseCart();
  };

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = item => {
    cartCtx.addItem(item);
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={closeHandler}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Checkout</button>}
      </div>
    </Modal>
  );
};

export default Cart;
