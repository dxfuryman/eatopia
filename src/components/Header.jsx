import logoImg from '../assets/logo.jpg'
import {CustomButton} from "./UI/Button.jsx";

export const Header = () => {
    return (
        <>
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant"/>
                <h1>Eatopia</h1>
            </div>
            <nav>
                <CustomButton textOnly>Cart (0)</CustomButton>

            </nav>
        </header>
        </>
    )
}