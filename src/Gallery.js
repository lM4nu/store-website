import React, { Component } from 'react'

class Gallery extends Component {

    constructor(props){
        super(props)
        this.state = {
            products : {}
        }
    }


    display(category){
            return category.forEach(obj => <h1>{obj.title}</h1>)
    }

    categoryHandler(category){
        if (category === 'all'){
            
            return this.props.data.forEach(arr => this.display(arr))
        }else{

            const index = this.props.categories.indexOf(this.props.category);
            return this.display(this.props.data[index-1]);
        }



    }

    render() {
        console.log(this.props.data)
        return (
            <div>
                {this.props.category} 
                {this.categoryHandler(this.props.category)}

            </div>
        )
    }
}

export default Gallery
