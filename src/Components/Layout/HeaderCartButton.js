import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect,useState } from 'react';
import cartContext from '../../storred/cart-context';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const ctx = useContext(cartContext);
    const { items } = ctx;

    //starting dari 0 terus ditambah terus sama item.amount
    const numberOfCart = ctx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);

    const btnstyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
          return;
        }
        setBtnIsHighlighted(true);
    
        //karena waktu bump 300 ms, dia tu kayak ngereset ulang bump biar bisa bump lagi
        //karena kalo gadi false, bump true terus gabakal jalan styles.bumpnya lagi
        const timer = setTimeout(() => {
          setBtnIsHighlighted(false);
        }, 300);
    
        return () => {
          clearTimeout(timer);
        };
      }, [items]);
    

    return (
        <button className={btnstyles} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>
                {numberOfCart}
            </span>

        </button>
    )
}

export default HeaderCartButton;