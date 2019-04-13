import React, {Fragment} from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import SearchPageContainer from "./components/CityInfo/CityInfoContainer";
import {Container} from "semantic-ui-react";

let App = () => {
    return (
        <Fragment>
            <NavBar/>
            <Container>
                <Route exact path="/" component={MainPageContainer}/>
                <Route exact path="/search" component={SearchPageContainer}/>
            </Container>
        </Fragment>
    )
};

export default App;
