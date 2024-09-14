import {Modal} from "./UI/Modal.jsx";
import {useContext} from "react";
import cartContext from "../store/CartContext.jsx";
import {currencyFormatter} from "../util/formating.js";
import {CustomButton} from "./UI/Button.jsx";
import {UserProgressContext} from "../store/UserProgressContext.jsx";  // Imported UserProgressContext

export const Cart = () => {
    // Using useContext to get the cart context
    const cartCtx = useContext(cartContext);

    // Using useContext to get the user progress context
    const userProgressCtx = useContext(UserProgressContext); // Changed from UserProgressCtx to userProgressCtx for consistency

    // Calculating the total price in the cart
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleCloseCart(){
    userProgressCtx.hideCart();
    }

    // Using userProgressCtx to check if the modal should be open
    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map(item =>
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                    </li>
                )}
            </ul>
            {/* Formatting the cart total using currencyFormatter */}
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>

            {/* Modal actions with two buttons: Close and Go to Checkout */}
            <p className="modal-actions">
                <CustomButton textOnly onClick={handleCloseCart}>Close</CustomButton>
                <CustomButton>Go to Checkout</CustomButton>
            </p>
        </Modal>
    );
};
