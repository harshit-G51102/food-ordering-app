import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import cartContext from '../../store/Cart-context';
import CartItem from './CartItem';

const Cart=props=>{
    const cartCtx=useContext(cartContext)
    const totalAmount=`₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems=cartCtx.items.length>0;
    const CartItemAddHandler=item=>{
        cartCtx.addItem({...item,amount:1});
    }
    const cartItemRemoveHandler=id=>{
        cartCtx.removeItem(id);
    }
    const cartItems=<ul className={classes['cart-items']}>{cartCtx.items.map((item)=>(
        <li><CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={CartItemAddHandler.bind(null,item)}></CartItem></li>
    ))}</ul>
    return<Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}
export default Cart;