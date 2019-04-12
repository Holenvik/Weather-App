import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import SearchPageContainer from "./components/CityInfo/CityInfoContainer";

let App = () => {
    return (
        <div>
            <NavBar/>
            <Route exact path="/" component={MainPageContainer}/>
            <Route exact path="/search" component={SearchPageContainer}/>
        </div>
    )
};

export default App;
