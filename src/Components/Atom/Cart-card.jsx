import React from "react";
import './Cart-card.scss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartCard = ((props)=>{
    const{
        removeCartItem= ()=> null,
        addCartItem = () => null,
         deleteCart =() => null,
        foodName="",
        foodPrice="",
        imagUrl= "",
        qauntityprops= 0
    }=props;
    return (<>
    <div className="cart-card-container">
        <div className="cart-card-wrapper">
            <div className="crt-item-img-conatainer">
                <img className="crt-item-image" src={imagUrl} alt="cart image"/>
            </div>
            <div className="description-container">
                <p className="desc">{foodName}</p>
                <p className="price">&#8377;{foodPrice}</p>
                <div className="quantity-area">
                 <RemoveIcon onClick={removeCartItem}/> {qauntityprops} <AddIcon onClick={addCartItem}/> </div>
            </div>
            <div className="delete-icon"><DeleteOutlineIcon onClick={deleteCart}/></div>
        </div>
    </div>
</>)
})

export default CartCard;