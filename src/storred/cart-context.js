import React from "react";


//dibuat karena dari cart mau ngirim ke available items
const cartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem: (item)=>{},
    removeItem: (id)=> {}
})

export default cartContext;