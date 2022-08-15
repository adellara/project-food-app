import cartContext from "./cart-context";

import {useReducer}from 'react';

const defaultCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state,action)=>{
    if(action.type==='ADD_ITEM'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        //buat cek apakah barang ini udah pernah ditambah sebelumnya
        const existingCartItemIndex = state.items.findIndex(item => item.id ===action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems;

        //update item yg udh pernah ditambah dengan amount terbaru
        if(existingCartItem){
            const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount+action.item.amount
            }
            //overwrite yg amount lama dengan yg updated
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }

    if(action.type=='REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex(item => item.id ===action.id);
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.amount;
        let updatedItems;
        if(existingCartItem.amount===1){
            updatedItems = state.items.filter(item=> item.id !== action.id)
        } else {
            const updatedItem = {...existingCartItem,amount:existingCartItem.amount-1}
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        return{
            items:updatedItems,
            amount:updatedTotalAmount
        }

    }
    return defaultCartState;
};

const CartProvider = props => {
    const[cartState, dispatchCartState]=useReducer(cartReducer,defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartState({type:'ADD_ITEM',item:item})
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartState({type:'REMOVE_ITEM',id:id})


    };
    const cartCntx = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    return <cartContext.Provider value={cartCntx}>
        {props.children}
    </cartContext.Provider>
}

export default CartProvider;