import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCardData } from '../Redux/store';

function Home() {
    const itemsInBasket = useSelector((state) => state.itemsInBasket);
    const cards = useSelector((state) => state.card);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const fetchFn = async () => {
    //         const response = await fetch('https://fakestoreapi.com/products');
    //         const data = await response.json();
    //         setData(data);
    //     }

    //     fetchFn()
    // }, []);

    const fetchFn = async () => { 
        const response = await fetch('https://fakestoreapi.com/products'); 
        const data = await response.json(); 
        return data; 
    };

    useEffect(() => {
         const fetchData = async () => {
             const data = await fetchFn(); 
             dispatch(setCardData(data)); 
            };

            fetchData(); 
    }, [dispatch]);

    const addFunc = () => {
        dispatch({
            type: "ADD",
            payload: 1
        })
    }

    const deleteFunc = () => {
        if (itemsInBasket > 0) {
            dispatch({
                type: "DELETE",
                payload: 1
            })
        }
    }

    return (
        <div className='home'>
            {
                cards.map((product) => {
                    return <div className='card' key={product.id}>
                        <img src={product.image} alt="" className='cardImg' />

                        <div className="info">
                            <div className='priceAndTitleBox'>
                                <h3>{product.title.length > 30 ? product.title.slice(0, 30) + "..." : product.title}</h3>

                                <p>{product.price}$</p>
                            </div>

                            <span>
                                {product.description.length > 150 ? product.description.slice(0, 150) + "..." : product.description}
                            </span>

                            <div className='addBox'>
                                <button className='add-btn' onClick={addFunc}>Add</button>

                                <button className='delete-btn' onClick={deleteFunc}>Delete</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Home