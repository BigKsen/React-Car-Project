import style from "./Mercedes.module.css";
import MercedesLogotype from "../../assets/images/MercedesLogo.avif";
import { Link } from "react-router-dom";
import BackBtn from "../../Composants/BackBtn/BackBtn";

const Mercedes = () => {
  return (
    <>
      <BackBtn />
      <div className={style.mainMercedes}>
        <div className={style.MercedesLogotypeDiv}>
          <img src={MercedesLogotype} alt="Logo Mercedes" />
        </div>

        <div className={style.MercedesInfos}>
          <p>
            Mercedes-Benz, a flagship German automobile brand, is synonymous
            with luxury, quality, and advanced technology. Founded in 1926, the
            company was born from the vision of Karl Benz and Gottlieb Daimler,
            who are credited with creating the first gasoline-powered
            automobile. The brand’s iconic silver star logo represents a
            commitment to excellence in engineering and design.
          </p>

          <p>
            As a pioneer in automotive innovation, Mercedes-Benz is known for
            its groundbreaking advancements in safety, performance, and comfort.
            From introducing the first production car with an anti-lock braking
            system ABS to creating revolutionary autonomous driving technology,
            Mercedes-Benz continually sets new standards in the automotive
            industry. With a diverse range of vehicles, from high-performance
            AMG models to luxury sedans, SUVs, and the EQ electric line-up,
            Mercedes-Benz offers unmatched quality and luxury for discerning
            customers around the globe. Its combination of sophisticated design,
            cutting-edge technology, and unmatched comfort has made
            Mercedes-Benz a symbol of prestige in the world of luxury cars.
          </p>
        </div>

        <div className={style.models}>
          <Link to="./MercedesCLE">
            <div className={style.CLE}></div>
          </Link>

          <Link to="./MercedesGLE">
            <div className={style.GLE}></div>
          </Link>
          <Link to="./MercedesMaybach">
            <div className={style.Maybach}></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mercedes;
