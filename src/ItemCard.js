import React from 'react'

function ItemCard(props) {
    return (
        <div>
            <div className="card-overlay" onClick={props.switchCard}>
            </div>
            <div className="card" >
                    <button onClick={props.switchCard}>X</button>
                    {props.info.title}
                    {props.info.price}
                    <button onClick={() => props.addToCart(props.info)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ItemCard
