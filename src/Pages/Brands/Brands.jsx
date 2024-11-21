import style from "./Brands.module.css"
import {Link, NavLink} from "react-router-dom"
import MercedesLogo from "../../assets/images/MercedesLogo.avif";
import BMWLogo from "../../assets/images/BMWLogo.avif";
import AudiLogo from "../../assets/images/AudiLogo.avif";
import BackBtn from "../../Composants/BackBtn/BackBtn";
import {useNavigate, useLocation} from "react-router-dom";

const Brands=()=>{
    //states
    const navigate = useNavigate();
    const location = useLocation();

    //comportements
    const handleBack = () => {
        if (location.key) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };
    return (
        <>
            <BackBtn />
            <div className={style.mainBrands}>
                <Link to="/">
                    <img src={MercedesLogo} alt="MercedesLogo" className={style.carsLogo} />
                </Link>
                <Link to="/">
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