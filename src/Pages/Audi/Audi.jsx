import style from "./Audi.module.css";
import AudiLogotype from "../../assets/images/AudiLogo.avif";
import { Link } from "react-router-dom";

import BackBtn from "../../Composants/BackBtn/BackBtn";

const Audi = () => {

    return (
        <>
            <BackBtn />
            <div className={style.mainAudi}>
                <div className={style.AudiLogotypeDiv}>
                    <img src={AudiLogotype} alt="Logo Audi" />
                </div>

                <div className={style.AudiInfos}>
                    <p>
                        Audi is a renowned German automobile manufacturer, recognized for its luxury vehicles that
                        combine performance, technology, and premium craftsmanship. Founded in 1909 by August Horch, the
                        brand has grown to become a symbol of innovation and precision engineering. Audi's signature
                        four-ring logo represents the merger of four companies that formed Auto Union, a key chapter in
                        its history.
                    </p>

                    <p>
                        Today, the brand is part of the Volkswagen Group and continues to push the boundaries of
                        automotive design. Known for its famous quattro all-wheel-drive system, Audi is celebrated for
                        delivering a superior driving experience. The company consistently integrates cutting-edge
                        technology, from advanced infotainment systems to autonomous driving capabilities. Audi's sleek,
                        modern designs and attention to detail have earned it a loyal global customer base. Whether it's
                        high-performance sports cars or eco-friendly electric vehicles, Audi remains at the forefront of
                        the luxury car market.
                    </p>
                </div>

                <div className={style.models}>
                    <Link to="./AudiA8">
                        <div className={style.A8}></div>
                    </Link>

                    <Link to="./AudiRS">
                        {" "}
                        <div className={style.RS}></div>
                    </Link>
                    <Link to="./AudiQ7">
                        {" "}
                        <div className={style.Q7}></div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Audi;
