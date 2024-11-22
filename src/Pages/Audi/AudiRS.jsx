import style from "./AudiModels.module.css";
import ModelOverview from "../../Composants/ModelOverview/ModelOverview";
import TurningAudiRS1 from "../../assets/images/AUDI/RS/Ready/Resized/TurningAudiRSfront.avif";
import TurningAudiRS2 from "../../assets/images/AUDI/RS/Ready/Resized/TurningAudiRSside.avif";
import TurningAudiRS3 from "../../assets/images/AUDI/RS/Ready/Resized/TurningAudiRSback2.avif";
import TurningAudiRS4 from "../../assets/images/AUDI/RS/Ready/Resized/TurningAudiRSback.avif";
import BackBtn from "../../Composants/BackBtn/BackBtn";

const AudiRS = () => {
  //affichage
  return (
    <>
      <BackBtn />

      <div className={style.mainAudiModels}>
        <ModelOverview
          image={[
            TurningAudiRS1,
            TurningAudiRS2,
            TurningAudiRS3,
            TurningAudiRS4,
          ]}
          alt="image de Audi RS"
          creationText="The Audi RS line was launched in the 1990s to push the boundaries of Audi’s performance capabilities. “RS” stands for “RennSport” (German for “Racing Sport”), symbolizing Audi's commitment to combining race-ready power with everyday usability. The RS models embody Audi’s high-performance philosophy.
          Each RS model is crafted by Audi Sport, the brand’s performance division. Audi Sport engineers bring race-inspired technology to the RS line, creating cars with exceptional power and precision. The RS lineup has expanded over the years, featuring everything from compact cars to SUVs, each delivering top-tier performance.
          The RS range aims to offer enthusiasts a unique driving experience, blending extraordinary speed with refined luxury. Each vehicle is a blend of technical innovation and Audi’s motorsport expertise, making the RS models sought-after by drivers who crave both power and sophistication."
          designText="Audi RS models are instantly recognizable by their aggressive design and aerodynamic styling. The wide stance, iconic Singleframe grille with honeycomb pattern, and bold RS badging set them apart from standard models. This exterior design exudes power and performance.
          The interior of an RS model is crafted with a sporty, high-end aesthetic. Alcantara, carbon fiber, and fine leather are integrated throughout the cabin, providing a premium yet performance-focused feel. RS seats, often with honeycomb stitching, are designed to provide support during dynamic driving.
          The cockpit is driver-centered, with RS-specific digital displays showing performance metrics like G-forces, lap times, and power output. Every element, from the flat-bottom steering wheel to the aluminum pedals, enhances the RS model’s racing character, blending luxury with sport-focused design."
          technologyText="Audi RS models are equipped with state-of-the-art technology for a premium and engaging driving experience. Audi’s Virtual Cockpit offers RS-specific displays, including a tachometer-centered view for a racing feel. Key metrics like acceleration, tire pressure, and torque are accessible at a glance.
          The infotainment system integrates seamlessly with Audi’s MMI Navigation and smartphone connectivity, allowing drivers to stay connected. With RS-specific settings, the car's dynamics can be customized to the driver’s preferences, from engine response to suspension stiffness.
          Audi’s advanced safety and driver assistance features come standard in RS models, with technologies like adaptive cruise control, collision detection, and lane-assist systems. These systems ensure safety without sacrificing the thrill of high-performance driving, making RS models versatile and safe."
          featuresText="Audi RS models come with a range of powerful engines, including twin-turbo V6 and V8 options. These engines deliver staggering horsepower and torque, providing exhilarating acceleration and top speeds. Paired with Audi’s quattro all-wheel-drive, RS models handle all conditions with confidence.
          The RS line features an adaptive air suspension and Audi’s Drive Select system, allowing drivers to adjust performance settings for different driving experiences. This customizable suspension improves comfort during city driving while offering maximum responsiveness on the track.
          With their distinctive styling, exclusive RS badging, and sport exhaust systems, RS models stand out as symbols of high performance. Their luxurious yet race-inspired cabins, combined with track-worthy performance, make Audi RS models the ultimate choice for drivers who demand both power and prestige."
        />
      </div>
    </>
  );
};

export default AudiRS;
