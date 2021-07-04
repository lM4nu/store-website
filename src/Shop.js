import React, { Component } from 'react';
import Gallery from './Gallery';
import { Link } from 'react-router-dom';
class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            fetching : true,
            products : [],
            categories: ['all'],
            currentcat : this.props.match.params.id ? this.props.match.params.id : 'all'
        }
    }


    getData = async () => {
        console.log('getting data')

        const catResponse = await fetch("https://fakestoreapi.com/products/categories")
        const categories = await catResponse.json()

        categories.forEach( cat => this.state.categories.push(cat))
        this.setState(prevState => ({
            categories : prevState.categories
        }))

        for(const cat of categories){
            const response = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
            const data = await response.json();

            this.state.products.push(data);
        }

        this.setState(prevState => ({
            products : prevState.products,
            fetching : false
        }),  () => console.log(this.state))

    }

    componentDidMount(){
        this.getData();
    }


    render(){
        console.log(this.state)
        console.log(this.props.match.params.id)
        if( this.state.fetching) {
            return(
                <div>
                    Loading...
                </div>
            ) ;
        }else {
        return(
            <div>
                <h1>categories</h1>
                <ul>
                    {this.state.categories.map( (cat,i) => <li key={i}><Link to={`/shop/${cat}`}> {cat} </Link></li>)}
                </ul>
                <Gallery category={this.props.match.params.id} categories={this.state.categories} data={this.state.products}/>
            </div>
        )
        }
    }



}

export default Shop;