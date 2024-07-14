import { CartContext } from '../../contexts/cart.context'
import './checkout-item.styles.scss'
import { useContext } from 'react'

const CheckoutItem = ({cartItems}) => {
    const {clearItemFromCart, removeItemFromCart, addItemToCart} = useContext(CartContext)
const {name, imageUrl, quantity, price} = cartItems;

const clearItemHandler = () => clearItemFromCart(cartItems)
const removeItemFromCartHandler = () => removeItemFromCart(cartItems) 
const addItemToCartHandler = () => addItemToCart(cartItems) 


    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl}  alt={`${name}`}/>
            </div> 
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
            <span className='quantity'>
                <div className='arrow'onClick={removeItemFromCartHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemToCartHandler}>
                    &#10095;
                </div>
                </span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;