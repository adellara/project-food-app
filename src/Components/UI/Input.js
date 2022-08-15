import React from 'react';
import styles from './Input.module.css'

//ref itu buat forward dari ref asal, forwared Ref itu asalnya
//ref disini ngepassing 
const Input = React.forwardRef((props,ref) => {
    return <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}/>
    </div>
})

export default Input;

//{...props.input} buat automaticly naro semua props input ke input, semua atributnya, mulai dari key, type blabla