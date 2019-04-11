import React, {Fragment} from "react";
import style from "./navbar.module.css";


let NavBar = () => {
    return (
        <Fragment>
            <header className={style.headerBlock}>
                <span>
                        Weather App
                </span>
            </header>
        </Fragment>
    )
};

export default NavBar