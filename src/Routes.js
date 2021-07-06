import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Gallery from './Gallery';
import Home from './Home';
import Shop from './Shop';
import "./App.css";

class Routes extends Component {

    constructor(){
        super()
        this.state = {}
    }

    render(){
        return (

    <Router>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/shop/:id" component={Shop}/>
            {/* <Route path="/shop" component={Shop}/> */}
            <Route path="/" component={Home}/>
        </Switch>
    </Router>
)
        }
}

export default Routes;