import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const Form=props=>{
    const amountInputRef=useRef();
    const[isAmountValid,setAmountIsValid]=useState(true);
    const submitHandler=event=>{
        event.preventDefault()
        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber=+enteredAmount;
        if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
            setAmountIsValid(false);
            return;
        }
        else{
            setAmountIsValid(true); 
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label='amount' 
        input={{id:'amount_'+props.id ,
        type:'number', 
        min:1, max:6,
        step:1,
        defaultValue:1 }}>
        </Input>
        <button>+ Add</button>
        {!isAmountValid && <p>enter valid amount</p>}
    </form>
}
export default Form;