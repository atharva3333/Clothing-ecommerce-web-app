import { Outlet , Link } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen}= useContext(CartContext);


    return(
        <Fragment>
            <NavigationContainer>
            <LogoContainer to='/'>
            <Crownlogo className="logo"/>
            </LogoContainer>
               
                <NavLinks> 
                <NavLink className="nav-link" to='/shop'>
                  SHOP
                </NavLink>
                {
                  currentUser ? (
                    <span className="nav-link" style={{color: 'red'}} onClick={signOutUser}>SIGN OUT</span>) 
                    : (<NavLink className="nav-link" to='auth'>SignIn</NavLink>)
                }
                <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;