import logoImg from '../assets/logo.jpg'
import {CustomButton} from "./UI/Button.jsx";
import {useContext} from "react";
import cartContext from "../store/CartContext.jsx";
import {UserProgressContext} from "../store/UserProgressContext.jsx";

export const Header = () => {
    const cartCtx = useContext(cartContext);
    const userProgressCtx = useContext(UserProgressContext)
    
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
     return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <>
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant"/>
                <h1>Eatopia</h1>
            </div>
            <nav>
                <CustomButton textOnly onClick={handleShowCart}>Cart ({totalCartItems})</CustomButton>

            </nav>
        </header>
        </>
    )
}