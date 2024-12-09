import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 300,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 500,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 350,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 250,
    },
  ];
const AvailableMeals=()=>{
    const mealList=DUMMY_MEALS.map((meal)=><MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>)
    return <section className={classes.meals}>
      <Card><ul>{mealList}</ul></Card>
    </section>
}
export default AvailableMeals;