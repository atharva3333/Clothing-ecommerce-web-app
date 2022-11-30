import {CheckoutItemContainer, ImageContainer,Name,Quantity,Arrow,Value,Price,RemoveButton} from './checkout-item.styles'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CheckoutItem = ( { cartItem} )=>{
   const {name,imageUrl, price, quantity}= cartItem;
   const { clearItemFromCart,addItemToCart , removeItemToCart}= useContext(CartContext);

   const clearItemHandler =()=> clearItemFromCart(cartItem);
   const addItemHandler =()=> addItemToCart(cartItem);
   const removeItemHandler =()=> removeItemToCart(cartItem);

   return(
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
      <Arrow onClick={removeItemHandler}>&#8249;</Arrow>
      <Value>{quantity}</Value>
      <Arrow onClick={addItemHandler}>&#8250;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#215;</RemoveButton>
    </CheckoutItemContainer>
   )
}
export default CheckoutItem