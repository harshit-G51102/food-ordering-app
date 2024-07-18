import React from "react";
const cartContext=React.createContext({
    items:[],
    totalAmount:0,
    additem: (item)=>{},
    removeItem: (id)=>{}
});

export default cartContext;