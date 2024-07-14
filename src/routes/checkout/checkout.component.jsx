import { useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { PaystackButton } from 'react-paystack';
import { UserContext } from '../../contexts/user.context';

const Checkout = () => {
    const publicKey = "pk_test_e9a769cc78a024a1ffa06f8a38c7587a60dd8db8";
    const {cartItems, priceTotal} = useContext(CartContext);
    const {currentUser} = useContext(UserContext)
    const {email} = currentUser;
        const componentProps = {
            amount: priceTotal * 100,
            email: email,
            publicKey,
            text: "Pay",
            onSuccess: () => alert("Payment Received"),
            onclose: () => alert('Are you sure you want to close'),
        }
        
  
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>

                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                <span>Description</span>
                </div>
                <div className='header-block'>
                <span>Price</span>    
                </div>
                <div className='header-block'>
                <span>Quantity</span>       
                </div>
                <div className='header-block'>
                <span>Remove</span>    
                </div>
            </div>

    
            {cartItems.map((cartItem) => 
                    <CheckoutItem key={cartItem.id} cartItems={cartItem} />
        )}
        <span className='total'>Total : ${priceTotal }</span>
        
        <PaystackButton className='button-container'  {...componentProps}/>
        </div>
    )
}

export default Checkout;