import React, { Component } from 'react';
import Item from './Item';
class Gallery extends Component {

    constructor(props){
        super(props)
        this.state = {
            products : {}
        }
    }


    display(category){
            return category.map(obj => <Item data={obj}/>);
    }

    categoryHandler(category){
        if (category === 'all'){
            
            return this.props.data.map(arr => this.display(arr))
        }else{

            const index = this.props.categories.indexOf(this.props.category);
            return this.display(this.props.data[index-1]);
        }



    }

    render() {
        // console.log(this.props.categories.indexOf(this.props.category))
        return (
            <div>
                {this.props.category} 
                {this.categoryHandler(this.props.category)}

            </div>
        )
    }
}

export default Gallery
