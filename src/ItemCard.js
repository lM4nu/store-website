import React from 'react'

function ItemCard(props) {
    return (
        <div>
            <div className="card-overlay" onClick={props.switchCard}>
            </div>
            <div className="card" >
                <div className="close-btn">
                    <button onClick={props.switchCard}>X</button>
                </div>
                    <img className="cart-item-img" src={props.info.image} alt="product-image"></img>
                    {props.info.title}
                    {props.info.price}
                    <button onClick={() => props.addToCart(props.info)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ItemCard
