import React, { Component } from 'react';
import Item from './Item';
import ItemCard from './ItemCard';
class Gallery extends Component {

    constructor(props){
        super(props)
        this.state = {
            products : {},
            showCard: false
        }
    }


    display(category){
            return category.map(obj => <Item switchCard={this.switchCard} data={obj}/>);
    }

    categoryHandler(category){
        if (category === 'all'){
            return this.props.data.map(arr => this.display(arr))
        }else{

            const index = this.props.categories.indexOf(this.props.category);
            return this.display(this.props.data[index-1]);
        }
    }
    
    switchCard = (e) => {
        if(e.target.tagName === 'BUTTON' || e.target.className === 'card-overlay'){
            this.setState({
                showCard : false
            })
        }else{
            let title;
            let data ;
            if(e.target.tagName !== 'DIV'){
                title = e.target.parentElement.firstElementChild.alt;
            }else{
                title = e.target.firstElementChild.alt ;
            }

            this.props.data.forEach(arr => {
                arr.forEach(obj => {
                    if(obj.title === title){
                        data = obj;
                    }
                })
            })

            this.setState({
                showCard : true,
                cardInfo : data
            })
        }
    }

    render() {
        return (
            <div className="item-container">
                {this.categoryHandler(this.props.category)}
                {this.state.showCard ? <ItemCard info={this.state.cardInfo} switchCard={this.switchCard} addToCart={this.props.addToCart}/> : null}
            </div>
        )
    }
}

export default Gallery
