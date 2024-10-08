import {currencyFormatter} from '../util/formating.js'
import {CustomButton} from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
export const MealItem = ({meal}) => {
    const cartCtx = useContext(CartContext);
    function handleAddMealtoCart(){
  cartCtx.addItem(meal);
    }
    return (
        <>
            <li className="meal-item">
                <article>
                    <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
                    <div>
                        <h3>{meal.name}</h3>
                        <p className="meal-item-price">
                            {currencyFormatter.format(meal.price)}
                        </p>
                        <p className="meal-item-description">{meal.description}</p>
                    </div>
                    <p className="meal-item-actions">
                        <CustomButton onClick={handleAddMealtoCart}>Add to Cart</CustomButton>
                    </p>
                </article>
            </li>
        </>
    )
}