import React, { Component } from 'react';
import Gallery from './Gallery';
import CartBar from './CartBar';
import Cart from './Cart';
import { Link } from 'react-router-dom';
class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            fetching : true,
            products : [],
            categories: ['all'],
            currentcat : this.props.match.params.id ? this.props.match.params.id : 'all',
            showCart : false,
            cart : []
        }
    }


    getData = async () => {
        const catResponse = await fetch("https://fakestoreapi.com/products/categories");
        const categories = await catResponse.json();

        categories.forEach( cat => this.state.categories.push(cat));
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
        }))

    }

    componentDidMount(){
        this.getData();
    }


    showCart = (e) => {
        if(this.state.showCart){
            this.setState({
                showCart : false
            })
        }else{
            this.setState({
                showCart : true
        })
    }
    }

    addToCart = (productData) => {
        let exists = false;
        this.state.cart.forEach(arr => {
            if(arr[0] === productData){
                arr[1]++;
                exists = true;
            }
        })

        if(!exists){
            this.state.cart.push([productData,1])
        }

        this.setState( prevState => ({
            cart : prevState.cart
        }))

    }

    removeFromCart = (product) => {

        this.state.cart.forEach((arr,index) => {
            if(arr[0] === product){
                console.log(arr)
                this.state.cart.splice(index,1);

                this.setState( prevState => ({
                    cart : prevState.cart
                }))
                console.log(this.state.cart)
            }
        })

    }

    editCart = (product,operation) =>{
            this.state.cart.forEach(arr => {
                if(arr[0] === product) {
                    if(operation === "add"){
                        arr[1]++;
                    }else{
                        if(arr[1] > 1){
                        arr[1]--;
                        }
                    }
                }
            })

            this.setState(prevState => ({
                cart : prevState.cart
            }))

        }

    render(){
        if( this.state.fetching) {
            return(
                <div>
                    Loading...
                </div>
            ) ;
        }else {
        return(
            <div className="shop">
                <div className="bar">
                    <h1 style={{textAlign:'center'}}>categories</h1>
                    <ul className="cat-list">
                        {this.state.categories.map( (cat,i) => <li className={cat === this.props.match.params.id ? 'cat-list-item-active' : 'cat-list-item'} key={i}><Link style={{textDecoration:'none', color:'black'}}to={`/shop/${cat}`}> {cat} </Link></li>)}
                    </ul>
                </div>

                <div className="panel-container">
                <CartBar showCart={this.showCart}/>
                <Gallery category={this.props.match.params.id} categories={this.state.categories} data={this.state.products} addToCart={this.addToCart}/>
                {this.state.showCart ? <Cart showCart={this.showCart} data={this.state.cart} removeFromCart={this.removeFromCart} editCart={this.editCart}/> : null}

                </div>
            </div>
        )
        }
    }



}

export default Shop;