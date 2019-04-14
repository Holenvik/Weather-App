import React from "react";
import style from "./CityInfo.module.css"
import {SyncLoader} from "react-spinners";
import {Button, Card, Container, Message} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {statuses} from "../STATUSES";

let CityInfo = (props) => {
    let {WeatherInfo} = props;
    let {cityForSearch, status, cityWeatherInfo} = WeatherInfo;
    debugger
    switch (status) {
        case statuses.SUCCESS: {
            return (
                <Container className={style.cityInfoCard}>
                    <Card color="blue"
                          centered={true}
                          raised={true}>
                        <Card.Content textAlign="center">
                            <Card.Header>
                                {cityWeatherInfo.name}
                            </Card.Header>
                            <Card.Meta>
                                {`Current: ${cityWeatherInfo.main.temp}°`}
                            </Card.Meta>
                            <Card.Meta>
                                {`Wind Speed: ${cityWeatherInfo.wind.speed} m/hr`}
                            </Card.Meta>
                            <Card.Meta>
                                {`Clouds: ${cityWeatherInfo.weather[0].description.toUpperCase()}`}
                            </Card.Meta>

                        </Card.Content>
                    </Card>
                </Container>
            )
        }

        case statuses.ERROR: {
            return (
                <Container className={style.errorMessage}>
                    <Message error
                             size='massive'>
                        <Message.Header>We can't find {cityForSearch}</Message.Header>
                        <NavLink to="/">
                            <Button type="submit"
                                    inverted color="red">
                                Back to search
                            </Button>
                        </NavLink>
                    </Message>
                </Container>
            )
        }

        default: {
            return (
                <div className={style.spinner}>
                    <SyncLoader
                        sizeUnit={"px"}
                        size={100}
                        color={'#3ac0ff'}
                        loading={true}
                    />
                </div>
            )
        }
    }
};

export default CityInfo