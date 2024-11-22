import style from "./MercedesModels.module.css";
import ModelOverview from "../../Composants/ModelOverview/ModelOverview";
import TurningMercedesMaybach1 from "../../assets/images/Mercedes/Maybach/Ready/Resized/TurningMercedesMaybachfront.avif";
import TurningMercedesMaybach2 from "../../assets/images/Mercedes/Maybach/Ready/Resized/TurningMercedesMaybachside.avif";
import TurningMercedesMaybach3 from "../../assets/images/Mercedes/Maybach/Ready/Resized/TurningMercedesMaybachback2.avif";
import TurningMercedesMaybach4 from "../../assets/images/Mercedes/Maybach/Ready/Resized/TurningMercedesMaybachback.avif";
import BackBtn from "../../Composants/BackBtn/BackBtn";

const MercedesMaybach = () => {
  //affichage
  return (
    <>
      <BackBtn />

      <div className={style.mainMercedesModels}>
        <ModelOverview
          image={[
            TurningMercedesMaybach1,
            TurningMercedesMaybach2,
            TurningMercedesMaybach3,
            TurningMercedesMaybach4,
          ]}
          alt="image de Mercedes Maybach"
          creationText="The Mercedes-Maybach represents the pinnacle of luxury within the Mercedes-Benz lineup, created to meet the highest standards of exclusivity, refinement, and comfort. Launched in 2014 as a standalone luxury sub-brand, the Maybach name has a rich heritage dating back to the early 20th century, symbolizing opulence and sophistication.
          Each Mercedes-Maybach is crafted with meticulous attention to detail, combining traditional luxury with modern technology. The Maybach models are tailored for those who desire a unique driving experience that emphasizes comfort, elegance, and distinction, often featuring exclusive materials and handcrafted finishes.
          With the Maybach, Mercedes aims to deliver a truly bespoke luxury experience. This flagship vehicle is designed to offer unparalleled quality, precision engineering, and a sense of grandeur that appeals to discerning clients who expect the best in automotive luxury.
          "
          designText="The Mercedes-Maybach’s exterior design exudes elegance and presence, with a distinctive chrome grille, elongated body lines, and exclusive badging that signify its elite status. The design is both stately and sophisticated, with a focus on aerodynamics and aesthetics, making it a statement vehicle for any setting.
          Inside, the Maybach’s cabin is a sanctuary of luxury. Every detail, from the hand-stitched leather seats to the wood and metal accents, is crafted to perfection. Rear-seat passengers enjoy executive-class comfort, with reclining seats, custom climate control, and optional champagne coolers and folding tables.
          The cabin also features advanced soundproofing, creating an ultra-quiet interior space that enhances the sense of serenity. The ambient lighting, customizable in multiple colors, adds to the Maybach’s refined atmosphere, providing a tailored environment for relaxation or productivity on the go."
          technologyText="The Mercedes-Maybach is equipped with the latest MBUX (Mercedes-Benz User Experience) system, featuring dual high-definition displays for navigation, media, and vehicle settings. The system supports voice commands, touch control, and gestures, offering intuitive access to information and entertainment for all passengers.
          Advanced driver assistance features come standard, including adaptive cruise control, lane-keeping assist, and a 360-degree camera system. These features enhance safety and comfort, making long-distance travel more relaxing and secure for both driver and passengers.
          In the rear cabin, the Maybach offers individual entertainment systems with high-definition screens, wireless headphones, and smartphone connectivity. The technology is designed to provide a seamless experience for rear passengers, who can enjoy personal entertainment or control their own comfort settings with ease.
          "
          featuresText="The Mercedes-Maybach is powered by a range of refined engine options, including powerful V8 and V12 engines. These engines deliver smooth and effortless acceleration, providing a quiet yet capable performance that matches the Maybach’s luxurious character, ideal for both urban driving and highway cruising.
          Equipped with an advanced air suspension system, the Maybach offers an exceptionally smooth and comfortable ride. This suspension adjusts in real-time to road conditions, minimizing vibrations and ensuring a serene journey, regardless of the terrain. The Maybach's suspension and chassis design prioritize passenger comfort, creating a refined and stable ride.
          Luxury amenities abound in the Maybach, including heated and ventilated massage seats, a premium Burmester sound system, and panoramic sunroofs. Rear-seat passengers enjoy unparalleled comfort with features like extended legroom, footrests, and high-quality finishes, making the Mercedes-Maybach the epitome of automotive luxury for those who seek the ultimate in sophistication and exclusivity.
          "
        />
      </div>
    </>
  );
};

export default MercedesMaybach;
