import styles from './MealItem.module.css';
import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import cartContext from '../../../storred/cart-context'

const MealItem = props => {
    const ctx = useContext(cartContext)
    const price = `$${props.price.toFixed(2)}`

    //buat di pass ke form 
    const addToCartHandler = amount => {
        //semua yang berhubungan buat nambah ke cart ada di context api di cart-context
        ctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price,
        })
    }

    return (
        <li key={props.key} className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.key} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;