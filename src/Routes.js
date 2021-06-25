import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

class Routes extends Component {

    constructor(){
        super()
        this.state = {}
    }

    render(){
        return (

    <Router>
        <div>

            <Link to="/">x</Link>
            <Link to="/shop">z</Link>
        </div>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/" component={Home}/>
        </Switch>
    </Router>
)
        }
}

export default Routes;