import React, { Component } from 'react';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.data)
        return(
        <div>
            <div className="card-overlay" onClick={this.props.showCart}>
            </div>
            <div className="cart" >
                    <div className="close-btn">
                    <button onClick={this.props.showCart} >Close Cart</button>
                    </div>
                    {this.props.data.map(arr => {
                        return(
                            <div className="cart-item">
                                <div className="cart-item-left">
                                    <img className="cart-item-img" src={arr[0].image} alt="x"></img>
                                    <h2>{arr[0].title}</h2>
                                </div>
                                <div className="cart-item-right">
                                    <div className="cart-item-amount">
                                        <h2>Units </h2>
                                        <button className="amount-button" onClick={() => this.props.editCart(arr[0],"")}>-</button>
                                    <h2>{arr[1]} </h2>
                                        <button className="amount-button" onClick={() => this.props.editCart(arr[0],"add")}>+</button>
                                    </div>

                                    <div className="cart-item-amount">
                                        <h2>Price: </h2>
                                        <h2>${parseFloat((arr[0].price*arr[1]).toString().match(/\d+\.*\d{0,2}/g))}</h2>
                                    </div>

                                    <button onClick={() => this.props.removeFromCart(arr[0])}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
        )
    }
}

export default Cart;