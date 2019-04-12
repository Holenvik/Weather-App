import React from "react";
import CityInfo from "./CityInfo";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getCityInfoThunk} from "../Redux/WeatherReducer";

class CityInfoContainer extends React.Component {

    componentWillMount() {
        if (this.props.WeatherInfo.cityForSearch === null) {
            this.props.history.push("/");
        }
    }

    componentDidMount() {
        if (this.props.WeatherInfo.cityForSearch !== null) {
            this.props.getCityInfo()
        }
    }

    render() {
        return (
            <CityInfo {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        WeatherInfo: state.weather
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getCityInfo: () => {
            dispatch(getCityInfoThunk())
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CityInfoContainer))