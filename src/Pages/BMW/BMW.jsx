import style from "./BMW.module.css";
import BMWLogotype from "../../assets/images/BMWLogo.avif";
import { Link } from "react-router-dom";

import BackBtn from "../../Composants/BackBtn/BackBtn";

const BMW = () => {
  return (
    <>
      <BackBtn />
      <div className={style.mainBMW}>
        <div className={style.BMWLogotypeDiv}>
          <img src={BMWLogotype} alt="Logo BMW" />
        </div>

        <div className={style.BMWInfos}>
          <p>
            BMW, short for Bayerische Motoren Werke, is a distinguished German
            automobile manufacturer known for producing high-performance luxury
            vehicles. Established in 1916, the brand has built a legacy of
            precision engineering, innovative technology, and exceptional
            driving dynamics. BMW's iconic blue-and-white roundel logo reflects
            the brand's deep-rooted connection to aviation and engineering
            excellence.
          </p>

          <p>
            As one of the most successful luxury automakers in the world, BMW is
            celebrated for its "Ultimate Driving Machine" philosophy,
            emphasizing superior handling, power, and agility in every vehicle.
            The brand is recognized for its commitment to innovation,
            integrating state-of-the-art technology in areas such as driver
            assistance systems, hybrid and electric powertrains, and
            cutting-edge infotainment systems. BMW's lineup spans from sporty
            coupes and sedans to luxury SUVs and electric models, ensuring a
            blend of performance and sustainability. With a focus on delivering
            an unforgettable driving experience, BMW continues to lead the way
            in luxury automotive design.
          </p>
        </div>

        <div className={style.models}>
          <Link to="./BMWi7">
            <div className={style.i7}></div>
          </Link>

          <Link to="./BMWM8">
            {" "}
            <div className={style.M8}></div>
          </Link>
          <Link to="./BMWXM">
            {" "}
            <div className={style.XM}></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BMW;
