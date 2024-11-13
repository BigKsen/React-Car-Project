import style from "./Audi.module.css"
import AudiLogotype from "../../assets/images/AudiLogo.avif"


const Audi=()=>{

return (
    <>
        <div className={style.mainAudi}>
            <div className={style.AudiLogotypeDiv}>
                <img src={AudiLogotype} alt="Logo Audi" />
            </div>

            <div className={style.AudiInfos}>
                <p>

                    Audi is a renowned German automobile manufacturer, recognized for its luxury vehicles that combine
                    performance, technology, and premium craftsmanship. Founded in 1909 by August Horch, the brand has
                    grown to become a symbol of innovation and precision engineering. Audi's signature four-ring logo
                    represents the merger of four companies that formed Auto Union, a key chapter in its history.
                </p>

                <p>
                    Today, the brand is part of the Volkswagen Group and continues to push the boundaries of automotive
                    design. Known for its famous quattro all-wheel-drive system, Audi is celebrated for delivering a
                    superior driving experience. The company consistently integrates cutting-edge technology, from
                    advanced infotainment systems to autonomous driving capabilities. Audi's sleek, modern designs and
                    attention to detail have earned it a loyal global customer base. Whether it's high-performance
                    sports cars or eco-friendly electric vehicles, Audi remains at the forefront of the luxury car
                    market.
                </p>
            </div>

            <div className={style.models}>
                <div className={style.A8}></div>
                <div className={style.RS}></div>
                <div className={style.Q7}></div>
            </div>
        </div>
    </>
);

}

export default Audi