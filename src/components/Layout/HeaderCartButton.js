import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import cartContext from '../../store/Cart-context';
import { useContext, useEffect, useState } from 'react';

const HeaderCartButton=props=>{
    const cartctx=useContext(cartContext);
    const { items }=cartctx
    const [buttenIsHighlighted,setButnHighlighted]=useState(false);
    const numberOfCartItems=items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);
    const btnClass=`${classes.button} ${buttenIsHighlighted?classes.bump:''}`;
    useEffect(()=>{
        if(items.length===0){
            return;
        }
        else{
            setButnHighlighted(true);
            const timer=setTimeout(()=>{
                setButnHighlighted(false)
            },300);
            return()=>{
                clearTimeout(timer);
            }
        }
    },[items])
    return <button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon></CartIcon></span>
        <span>Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}
export default HeaderCartButton;