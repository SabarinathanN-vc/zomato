import React, { useState, useEffect } from "react";
import './Cart.scss';
import CartCard from "./Cart-card";

const Cart = ({ cartdata, setcartdata ,handleChange}) => {

    const deleteCart = ((arg) => {
        const newarr = cartdata.filter((dat) => dat.foodName !== arg.foodName)
        if (window.confirm("Make Sure want to delete item!")) {
            setcartdata(newarr)
             handlePrice()
          }
       
    })
    const [totalcartprice, settotalcartprice] = useState(0)
    const handlePrice = (() => {
        // if (cartdata && cartdata.length > 0) {
        //     let countprice = 0;
        //     cartdata.map(element => {
        //         countprice += +element.price
        //     });
        //     settotalcartprice(countprice)
        // }
        // else {
        //     settotalcartprice(0)
        // }
        let ans = 0;
        cartdata.map((item)=>(
            ans += item.amount * item.price
        ))
        settotalcartprice(ans);
    })

    useEffect(() => {
        handlePrice()
    })
    
    return (<>
  
        <div className="cart-conatiner">
            <div className="cart-wrapper">
                <div className="cart-heading">Welcome to Zomato cart...!</div>
                <div className="cart-total-price-container">Total Cart Price &#8377;<sapn>{totalcartprice}</sapn></div>
                <div className="cart-card-section">
                    {
                        cartdata.map((res) => {
                            console.log(res)
                            return (
                                <CartCard
                                    removeCartItem={() => handleChange(res, -1)}
                                     addCartItem = {()=>handleChange(res, +1)}
                                    deleteCart={() => deleteCart(res)}
                                    foodName={res.foodName}
                                    foodPrice={res.price}
                                    imagUrl={res.foodImageUrl}
                                 qauntityprops= {res.amount}

                                />);
                        })
                    }

                </div>
            </div>
        </div>
       
    </>)
}
export default Cart;