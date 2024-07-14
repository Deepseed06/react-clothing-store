import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { Fragment, useContext } from "react";
import Logo from "../../images/deepseed_logo.jpeg"
// import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import '../navigation/navigation.styles.scss'
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    return(
        <Fragment>
        <div className="navigation">
            <Link className="nav-link" to='/'>
                 <img className="logo" src={Logo} alt="" />
            </Link>
         <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
           {
            currentUser?  <Link className="nav-link" to='/auth' onClick={signOutUser}>
            SIGN OUT
        </Link>: <Link className="nav-link" to='/auth'>
                SIGN IN
            </Link>
           }
           <CartIcon/>
         </div>
         {
           isCartOpen && <CartDropdown/>
         }
        </div>
        
        <Outlet/>
        </Fragment>
    );
  };
  export default Navigation;