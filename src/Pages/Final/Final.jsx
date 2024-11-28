import GearsImg from "../../assets/images/GearsFinal.avif";
import style from "./Final.module.css";


const Final = () => {
  return (
    <div className={style.finalContainer}>
        <div className={style.finalContainerP}>
      <p>Thank you !</p>
      <p>We are processing to satisfy you.</p>
      <p>We take contact with you very soon.</p>
      </div>
      <img src={GearsImg} alt="gears" className={style.finalContainerImg}/>
    </div>
  );
};

export default Final;
