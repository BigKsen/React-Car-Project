import style from "./AudiModels.module.css";
import ModelOverview from "../../Composants/ModelOverview/ModelOverview";
import TurningAudiQ71 from "../../assets/images/AUDI/Q7/Ready/Resized/TurningAudiQ7front.avif";
import TurningAudiQ72 from "../../assets/images/AUDI/Q7/Ready/Resized/TurningAudiQ7side.avif";
import TurningAudiQ73 from "../../assets/images/AUDI/Q7/Ready/Resized/TurningAudiQ7back2.avif";
import TurningAudiQ74 from "../../assets/images/AUDI/Q7/Ready/Resized/TurningAudiQ7back.avif";
import BackBtn from "../../Composants/BackBtn/BackBtn";

const AudiQ7 = () => {
  //affichage
  return (
    <>
      <BackBtn />

      <div className={style.mainAudiModels}>
        <ModelOverview
          image={[
            TurningAudiQ71,
            TurningAudiQ72,
            TurningAudiQ73,
            TurningAudiQ74,
          ]}
          alt="image de Audi Q7"
          creationText="The Audi Q7 was first introduced in 2005 as Audi’s entry into the luxury SUV market, designed to offer a blend of versatility and sophistication. This model was Audi's response to the growing demand for premium SUVs that excel both on city roads and off-road terrains. Since then, the Q7 has become a flagship vehicle in Audi’s lineup, symbolizing their commitment to high performance and luxury.
          Each generation of the Q7 has brought innovations and improvements, reflecting Audi’s dedication to advancing automotive engineering. From increased efficiency to cutting-edge safety, the Q7 continues to raise the bar. Audi’s engineers and designers work tirelessly to ensure that each iteration of the Q7 stays ahead of industry trends.
          The Q7 is crafted with Audi’s Vorsprung durch Technik philosophy, meaning Progress through Technology. This vision is evident in every aspect of the Q7, from its powerful engines to its suite of digital systems. Audi strives to make the Q7 a top choice for luxury SUV enthusiasts."
          designText="The Q7’s exterior design combines Audi’s iconic, refined lines with the robust presence of an SUV. Its bold, wide stance and sleek profile exude a confident elegance that’s both sophisticated and athletic. The distinctive grille and sharp LED lighting contribute to its premium look.
          Inside, the Q7 offers a meticulously crafted cabin that’s both spacious and luxurious. High-quality materials, like leather upholstery and real wood trims, create a warm and elegant atmosphere, complemented by ergonomic design to ensure ultimate comfort. This attention to detail makes every journey pleasurable.
          Audi’s design philosophy ensures that every control and display is placed within easy reach. The cabin feels modern and intuitive, with ample space and flexible seating arrangements. The Q7 is as functional as it is beautiful, catering to both families and adventure-seekers alike.
          "
          technologyText="Audi equips the Q7 with advanced technology to enhance safety, connectivity, and driving experience. The latest version features Audi’s Virtual Cockpit, a digital instrument display that replaces traditional dials with a customizable, high-resolution screen. This innovative system provides essential information at a glance.
          The Q7 also includes MMI touch response, a dual-touchscreen setup for controlling navigation, media, and climate settings. This responsive interface is intuitive, making it easy for drivers to stay connected while focusing on the road. With smartphone integration, apps, and Wi-Fi, the Q7 is a digital hub on wheels.
          Safety is a priority, with features like adaptive cruise control, lane-keeping assist, and a 360-degree camera system. Audi’s suite of driver assistance technologies aims to prevent accidents and ease the stress of driving, making every journey in the Q7 both safe and enjoyable."
          featuresText="The Audi Q7 offers an impressive range of engines, from efficient hybrids to powerful V6 options, catering to diverse driving preferences. These engines are paired with Audi’s quattro all-wheel-drive system, ensuring excellent grip and performance in all road conditions.
          One of the highlights of the Q7 is its adaptive air suspension, which allows drivers to adjust ride height and firmness for optimal comfort and performance. This system adapts automatically based on road conditions, delivering a smooth, refined driving experience in any terrain.
          With up to seven seats and configurable cargo space, the Q7 is perfect for family trips or transporting gear. The power-operated tailgate, ample storage, and versatile seating make it practical without compromising on luxury, making it an ideal choice for a premium SUV.
          "
        />
      </div>
    </>
  );
};

export default AudiQ7;
