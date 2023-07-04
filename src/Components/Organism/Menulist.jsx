import React, { useEffect, useState } from "react";
import CradWithCrtBtn from '../Atom/CardWithCrtBtn';
import './MenuList.scss';
import Cart from "../Atom/Cart";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';

const MenuListcmp = ((props) => {
    const { } = props;

    const [viewCart, setViewCart] = useState(false);
    const [cartData, setCartData] = useState([])
    let data = JSON.parse(localStorage.getItem('hotelsList'));
// console.log(data)
    const addtToCart = ((arg) => {
        let ispresent = false
        cartData.forEach((items) => {

            if (items.foodName === arg.foodName) {
                ispresent = true;
            }
        })
        if (ispresent) {
            alert("Item already present")
            return;
        }
        arg.amount = 1
        setCartData([...cartData, arg])

    });


    const handleChange = (item, d) => {
        let ind = -1;
        cartData.forEach((data, index) => {
            if (data.foodName === item.foodName)
                ind = index;
        });
        const tempArr = cartData;
        tempArr[ind].amount += +d;
        if (tempArr[ind].amount === 0)
            tempArr[ind].amount = 1;
        setCartData([...tempArr])
    }

    const showCartfun = (() => {
        setViewCart(!viewCart)
    })

    const closeCart = (() => {
        setViewCart(!viewCart)
    })

    return (
        <>
            <div className="cart-header-con">
                <div className="cart-zmt-img-container">
                    <Link to="/">  <img className="image-container" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" /></Link>
                </div>
                <div className="cart-logo" onClick={showCartfun}><ShoppingCartOutlinedIcon /></div>
            </div>
            <div className="menu-list-container">
                <div className="menu-list-wrapper">
                    <div className="hotel-description-conatainer">
                        <div className="hotel-image-container"><img className="hotel-image" src={data.hotel_image} /></div>
                        <div className="hotel-description-con">
                            <p className="hotel-name">{data.hotel_Name}</p>
                            <p className="regionWiseTast-con">{data.regionWiseTast.join()}</p>
                            <p className="location-con">{data.location}</p>
                        </div>
                    </div>
                    <div className="hotel-menus-list">
                        {data.hotel_menu.map((res, index) => {
                            return <CradWithCrtBtn imageSource={res.foodImageUrl}
                                foodName={res.foodName}
                                price={res.price}
                                onclick={() => addtToCart(res)}
                            />
                        })}
                    </div>
                </div>
            </div>
            {
                viewCart && <div className="cart-container-area">
                    <div className="cart-con-wrapper">
                        <div className="cart-cancel-icon" onClick={closeCart}><CancelIcon /></div>
                        <Cart cartdata={cartData} setcartdata={setCartData} handleChange={handleChange} />
                    </div>
                </div>
            }

        </>
    )
})

export default MenuListcmp;