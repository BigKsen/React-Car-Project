import "./Main.module.css";
import style from "./Main.module.css";
import {Link, NavLink} from "react-router-dom"
import { useEffect } from "react";

const Main = () => {
   
    return (
        <main>
            <h1>Choose your dream</h1>
            <Link to="/configurator">
                <button className={style.readyBtn}>Ready ?</button>
            </Link>
        </main>
    );
};

export default Main;
