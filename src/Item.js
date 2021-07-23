import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        return(
            <div onClick={this.props.switchCard} className="item">
                <img className="item-img"src={this.props.data.image} alt={this.props.data.title}/>
                {this.props.data.title}
            </div>
        )
    }
}

export default Item;