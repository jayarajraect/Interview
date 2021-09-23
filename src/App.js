import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from '../src/componetnts/home';
import Header from '../src/componetnts/header';
import SideNav from '../src/componetnts/sideNav';
import Users from '../src/componetnts/users';
import Weather from '../src/componetnts/weather';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <div className="whole_wrapper">
                    <SideNav />
                    <div className="right_wrapper">
                        <Header />
                        <Route exact path='/' component={Home} />
                        <Route exact path='/users' component={Users} />
                        <Route exact path='/weather' component={Weather} />
                    </div>
                </div>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
