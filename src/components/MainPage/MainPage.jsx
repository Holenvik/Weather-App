import React from "react";
import style from "./MainPage.module.css"
import {Field, reduxForm} from "redux-form";
import {Form, Button, Container} from "semantic-ui-react";

let MainPage = (props) => {
    let {handleSubmit, pristine, submitting, handleOnChange} = props;
    const {valuesToTip} = props;
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className={style.submitForm}>
                    <div className={style.memorizedValues}>
                        <p>Hints:</p>
                        {valuesToTip && valuesToTip.map((el, id) => {
                            return <div className={style.memorizedCity}>{`${id + 1}. ${el}`}</div>
                        })}
                    </div>
                    <Field name="cityName"
                           component={Form.Input}
                           className={style.searchInput}
                           type="text"
                           autoComplete="off"
                           onChange={(e) => {
                               handleOnChange(e.target.value)
                           }}
                    />
                    <div className={style.memorizedButton}>
                        <Button type="submit"
                                disabled={pristine || submitting}
                                inverted color="blue">
                            Search
                        </Button>
                    </div>
                </div>
            </form>
        </Container>
    )
};


export default reduxForm({form: 'searchWeatherForm'})(MainPage);