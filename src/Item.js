import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        console.log(this.props.data)
        return(
            <div className="item">
                <img className="item-img"src={this.props.data.image}/>
                {this.props.data.title}
            </div>
        )
    }
}

export default Item;