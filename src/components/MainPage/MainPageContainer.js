import React from "react";
import MainPage from "./MainPage";
import {connect} from "react-redux";
import {setCityForSearchAC, setStatusWeather} from "../Redux/WeatherReducer";
import {withRouter} from "react-router-dom";
import {statuses} from "../STATUSES";

class MainPageContainer extends React.Component {

    componentWillMount() {
        if (localStorage.getItem("searchItems") !== null) {
            this.setState({memorizedValues: localStorage.getItem("searchItems").split(', ')})
        }
    }

    state = {
        memorizedValues: [],
        valuesToTip: null
    };

    handleOnChange = (value) => {
        const sortedValues = this.state.memorizedValues.filter(item => {
            if (value !== "") {
                return item.substr(0, value.length).toUpperCase() === value.toUpperCase()
            } else {
                return false
            }
        });
        this.setState({valuesToTip: Array.from(new Set(sortedValues))})
    };

    submit = values => {
        this.props.setStatusWeather();
        let prevStorage = localStorage.getItem("searchItems");
        localStorage.setItem("searchItems", `${prevStorage}, ${values.cityName}`);
        this.props.setCityForSearch(values.cityName);
        this.props.history.push("/search");
    };

    render() {
        return (
            <MainPage {...this.props}
                      valuesToTip={this.state.valuesToTip}
                      handleOnChange={this.handleOnChange}
                      onSubmit={this.submit}
            />
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        setCityForSearch: (city) => {
            dispatch(setCityForSearchAC(city))
        },
        setStatusWeather: () => {
            dispatch(setStatusWeather(statuses.INPROGRESS))
        }
    }
};

export default withRouter(connect(null, mapDispatchToProps)(MainPageContainer))