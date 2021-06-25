import React, { Component } from 'react';
import Link from 'react-router-dom';
class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            products : []
        }
    }


    getData = async () => {
        console.log('getting data')

        const catResponse = await fetch("https://fakestoreapi.com/products/categories")
        const categories = await catResponse.json()

        for(const cat of categories){
            const response = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
            const data = await response.json();

            this.state.products.push(data);
        }

        this.setState(prevState => ({
            fetching : false,
            products : prevState.products
        }),  () => console.log(this.state))

    }

    componentDidMount(){
        this.getData();
    }


    render(){
        return(
            <div>
                <h1>electronics</h1>
                <p>
                    {this.titles}
                </p>
            </div>
        )
    }



}

export default Shop;