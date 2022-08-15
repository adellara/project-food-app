import { useContext } from 'react';
import cartContext from '../../storred/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css'
import CartItem from './CartItem';

const Cart = props => {
  const cartCtx = useContext(cartContext)

  const totalAmount = `$${parseFloat(cartCtx.totalAmount).toFixed(2)}`
  const hasItems = cartCtx.items.length>0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };


  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => (
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


    return <Modal onClose={props.onClick}>
        {cartItems}
        <div className={styles.total}>
            <span>TotalAmount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClick}>Close</button>
            {hasItems && <button className={styles.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;