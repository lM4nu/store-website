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
                    <button onClick={this.props.showCart} >Close Cart</button>
                    {this.props.data.map(arr => {
                        return(
                            <div>
                                <h2>{arr[0].title}</h2>
                                <h2>{arr[1]}  ${arr[0].price*arr[1]}</h2>
                            </div>
                        )
                    })}
            </div>
        </div>
        )
    }
}

export default Cart;