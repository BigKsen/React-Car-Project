import React from "react";
import {useNavigate} from "react-router-dom";
import style from "./BackBtn.module.css";
import chevronBack from "../../assets/images/chevronBack.svg";

const BackBtn = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <button className={style.BackBtn} onClick={handleBack}>
        </button>
    );
};

export default BackBtn;
