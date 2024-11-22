import style from "./AudiModels.module.css";
import ModelOverview from "../../Composants/ModelOverview/ModelOverview";
import TurningAudiA81 from "../../assets/images/AUDI/A8/Ready/Resized/TurningAudiA8.avif";
import TurningAudiA82 from "../../assets/images/AUDI/A8/Ready/Resized/TurningAudiA8Back1.avif";
import TurningAudiA83 from "../../assets/images/AUDI/A8/Ready/Resized/TurningAudiA8Back2.avif";
import TurningAudiA84 from "../../assets/images/AUDI/A8/Ready/Resized/TurningAudiA8Left.avif";
import BackBtn from "../../Composants/BackBtn/BackBtn";

const AudiA8 = () => {
  //affichage
  return (
    <>
      <BackBtn />

      <div className={style.mainAudiModels}>
        <ModelOverview
          image={[
            TurningAudiA81,
            TurningAudiA82,
            TurningAudiA83,
            TurningAudiA84,
          ]}
          alt="image de Audi A8"
          creationText="The Audi A8, a flagship luxury sedan, was first introduced in 1994 as a successor to the Audi V8. The A8 was created to compete with top-tier luxury sedans like the Mercedes-Benz S-Class and BMW 7 Series. Its development focused on cutting-edge engineering, lightweight construction, and innovative design. 
        Audi pioneered the use of aluminum in its construction with the Audi Space Frame (ASF) technology, which significantly reduced weight without sacrificing rigidity. 
        Over the years, the A8 has evolved through various generations, with each iteration incorporating more advanced technology, improved performance, and luxurious comfort.   "
          designText="The Audi A8 exemplifies sleek, modern luxury with its bold, minimalist design. Its exterior features a wide, imposing single-frame grille, sharp LED matrix headlights, and flowing, aerodynamic lines that give it an elegant yet commanding presence on the road. 
        The long wheelbase contr ibutes to its stately proportions and ensures a spacious interior. Inside, the cabin is a masterpiece of craftsmanship, combining high-quality materials like leather, wood, and metal accents. 
        The minimalist dashboard features touch-sensitive controls and a high-resolution display that complements the overall futuristic aesthetic."
          technologyText="The Audi A8 is a technological powerhouse, equipped with state-of-the-art features that push the boundaries of modern driving. Audi's Virtual Cockpit is standard, providing a fully digital instrument cluster that offers customizable views and navigation. 
        The MMI touch response system controls various functions, allowing the driver and passengers to interact with the vehicle intuitively. 
        The A8 also boasts Level 3 autonomous driving capabilities, enabling the car to drive itself in certain conditions with minimal human intervention. Its Predictive Active Suspension uses cameras to scan the road ahead and adjust the suspension accordingly for a smooth, comfortable ride."
          featuresText="Among the key features of the Audi A8 are its advanced driver assistance systems, such as adaptive cruise control, lane-keeping assist, and night vision assist, enhancing both safety and convenience. 
        The engine options include a range of V6 and V8 powertrains, as well as a plug-in hybrid version, providing a balance of performance and efficiency. 
        The quattro all-wheel-drive system comes as standard, ensuring excellent traction and handling in various driving conditions. 
        Additionally, the rear-seat passengers are treated to first-class comfort, with features like adjustable seating, a rear-seat entertainment system, and climate controls tailored to individual preferences. 
        The Audi A8 is truly a showcase of luxury, technology, and precision engineering."
        />
      </div>
    </>
  );
};

export default AudiA8;
