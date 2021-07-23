import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartBar extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className="cart-bar">
                <Link style={{textDecoration:'none', color:'black'}} to="/">Home</Link>
                <div onClick={this.props.showCart}>Cart</div>
            </div>
        )
    }


}

export default CartBar;