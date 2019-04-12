import React from "react";
import style from "./MainPage.module.css"
import {Field, reduxForm} from "redux-form";

let MainPage = (props) => {
    let {handleSubmit, pristine, submitting, handleOnChange} = props;
    const {valuesToTip} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="cityName">Введите город</label>
                    <Field name="cityName"
                           component="input"
                           type="text"
                           onChange={(e) => {
                               handleOnChange(e.target.value)
                           }}
                    />
                </div>
                <button type="submit"
                        disabled={pristine || submitting}>Submit
                </button>
                <div className={style.memorizedValues}>
                    {valuesToTip && valuesToTip.map(el => {
                        return <p>{el}</p>
                    })}
                </div>
            </div>

        </form>
    )
};

export default reduxForm({form: 'searchWeatherForm'})(MainPage)