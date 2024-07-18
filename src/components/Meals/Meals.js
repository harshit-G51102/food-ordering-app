import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";


const Meals=props=>{
    return <React.Fragment>
        <MealsSummary></MealsSummary>
        
        <AvailableMeals></AvailableMeals>
    </React.Fragment>
}
export default Meals;