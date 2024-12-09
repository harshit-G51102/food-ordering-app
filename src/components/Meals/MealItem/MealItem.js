import { useContext } from 'react';
import classes from './MealItem.module.css';
import Form from './MealItemForm';
import cartContext from '../../../store/Cart-context';

const MealItem=props=>{
    const cartCtx=useContext(cartContext)
    const addToCartHandler=amount=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    }
    const price=`₹${props.price.toFixed(2)}`
    return <li className={classes.meal}>
        <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
            <Form onAddToCart={addToCartHandler} id={props.id}></Form>
        </div>
    </li>
}

export default MealItem;