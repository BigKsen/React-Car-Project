import style from "./Brands.module.css"
import {Link, NavLink} from "react-router-dom"
import MercedesLogo from "../../assets/images/MercedesLogo.avif";
import BMWLogo from "../../assets/images/BMWLogo.avif";
import AudiLogo from "../../assets/images/AudiLogo.avif";
import BackBtn from "../../Composants/BackBtn/BackBtn";

const Brands=()=>{

    return (
        <>
            <BackBtn />
            <div className={style.mainBrands}>
                <Link to="/Mercedes">
                    <img src={MercedesLogo} alt="MercedesLogo" className={style.carsLogo} />
                </Link>
                <Link to="/BMW">
                    <img src={BMWLogo} alt="BMWLogo" className={style.carsLogo} />
                </Link>
                <Link to="/Audi">
                    <img src={AudiLogo} alt="AudiLogo" className={style.carsLogo} />
                </Link>
            </div>
        </>
    );
}

export default Brands