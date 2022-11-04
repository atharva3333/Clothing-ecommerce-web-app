import { Outlet , Link } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen}= useContext(CartContext);


    return(
        <Fragment>
            <div className="navigation">
            <Link className="logo-container" to='/'>
            <Crownlogo className="logo"/>
            </Link>
               
                <div className="nav-links-container"> 
                <Link className="nav-link" to='/shop'>
                  SHOP
                </Link>
                {
                  currentUser ? (
                    <span className="nav-link" style={{color: 'red'}} onClick={signOutUser}>SIGN OUT</span>) 
                    : (<Link className="nav-link" to='auth'>SignIn</Link>)
                }
                <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;