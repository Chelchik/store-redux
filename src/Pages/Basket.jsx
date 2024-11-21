import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Basket() {
  const cards = useSelector((state) => state.card);
  const inTheBasket = useSelector((state) => state.inTheBasket);
  const dispatch = useDispatch();

  return (
    <div className='basket'>
      {
        cards.map((product) => {
            return <div className='cardInBasket' key={product.id}>
            <img src={product.image} alt="" className='cardInBasketImg' />

            <div className="info">
              <div className='priceAndTitleBox'>
                <h3>{product.title.length > 30 ? product.title.slice(0, 30) + "..." : product.title}</h3>

                <p>{product.price}$</p>
              </div>

              <span>
                {product.description.length > 150 ? product.description.slice(0, 150) + "..." : product.description}
              </span>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Basket