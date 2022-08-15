import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css'

const MealItemForm = props => {
    const [isAmountValid, setIsAmountValiduseState]= useState(true)
    const amountInputRef = useRef()
    
    const submitHandler = event=>{
        event.preventDefault();

        //amountInputRef isinya banyak array dimana dia nyimpen input di .current.value
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length===0 || enteredAmount <1 || enteredAmount > 5){
            setIsAmountValiduseState(false)
            return;
        }

        //buat nambah angka di cart kanan atas
        props.onAddToCart(enteredAmountNumber);
    }

    return <form className={styles.form} onSubmit={submitHandler}>
        <Input label="Amount" ref={amountInputRef} input={{
            id:'amount_'+props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>+Add</button>
        {!isAmountValid&&<p>Please enter valid</p>}
    </form>
}

export default MealItemForm;