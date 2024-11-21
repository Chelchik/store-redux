import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsBasket } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const itemsInBasket = useSelector((state) => state.itemsInBasket);
    // const dispatch = useDispatch();

    const basketStyle = {
        color: "#fff",
        fontSize: "40px"
    }

    const basketAddStyle = {
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: itemsInBasket == 0 ? "-50px" : "-1px" ,
        right: "-1px",
        transition: "0.5s",
        padding: "10px"
      }



    return (
        <header>
            <nav>
                <ul className="menu">
                    <li><NavLink to="/" className="menu-link">Home</NavLink></li>
                    <li><NavLink to="basket" className="menu-link">Basket</NavLink></li>
                </ul>
            </nav>
            
            <div className='basketAddBox'>
                <div style={basketAddStyle}>
                    <b className='basketAddText'>{itemsInBasket > 99 ? "+99" : itemsInBasket}</b>
                </div>

                <BsBasket style={basketStyle} />
            </div>
        </header>
    )
}

export default Header