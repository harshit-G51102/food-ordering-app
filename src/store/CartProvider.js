
import cartContext from "./Cart-context";
import { useReducer } from "react";
const defaultCartState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedTotalAmount=state.totalAmount + action.item.amount*action.item.price;
        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);
        const existingCartItem=state.items[existingCartItemIndex];
        let updateItems;
        if(existingCartItem){
            const updateItem={
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updateItems=[...state.items];
            updateItems[existingCartItemIndex]=updateItem;
        }
        else{
            updateItems=state.items.concat(action.item);
        }
        return {
            items:updateItems,
            totalAmount:updatedTotalAmount
        }
    }
    if(action.type==='REMOVE'){
        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.id);
        const existingCartItem=state.items[existingCartItemIndex];
        const updatedTotalAmount=state.totalAmount-existingCartItem.price;
        let updateItems;
        if(existingCartItem.amount===1){
            updateItems=state.items.filter(item=>item.id!==action.id);
        }
        else{
            const updateItem={
                ...existingCartItem,amount:existingCartItem.amount-1
            };
            updateItems=[...state.items];
            updateItems[existingCartItemIndex]=updateItem;
        }
        return {items:updateItems,
            totalAmount:updatedTotalAmount
        }

    }
    return defaultCartState;
}
const CartProvider=props=>{
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
    const addItemsToCartHandler=item=>{
        dispatchCartAction({type:'ADD',item:item})
    }
    const removeItemsFromCartHandler=id=>{
        dispatchCartAction({type:'REMOVE',id:id})
    }
const CartContext={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addItemsToCartHandler,
    removeItem:removeItemsFromCartHandler
};

    return <cartContext.Provider value={CartContext}>
        {props.children}
    </cartContext.Provider>
}

export default CartProvider;