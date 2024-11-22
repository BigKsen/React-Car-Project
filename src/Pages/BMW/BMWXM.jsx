import style from "./BMWModels.module.css";
import ModelOverview from "../../Composants/ModelOverview/ModelOverview";
import TurningBMWXM1 from "../../assets/images/BMW/XM/Ready/Resized/TurningBMWXMfront.avif";
import TurningBMWXM2 from "../../assets/images/BMW/XM/Ready/Resized/TurningBMWXMfront2.avif";
import TurningBMWXM3 from "../../assets/images/BMW/XM/Ready/Resized/TurningBMWXMback.avif";
import TurningBMWXM4 from "../../assets/images/BMW/XM/Ready/Resized/TurningBMWXMback2.avif";
import BackBtn from "../../Composants/BackBtn/BackBtn";

const BMWXM = () => {
  //affichage
  return (
    <>
      <BackBtn />

      <div className={style.mainBMWModels}>
        <ModelOverview
          image={[TurningBMWXM1, TurningBMWXM2, TurningBMWXM3, TurningBMWXM4]}
          alt="image de BMW XM"
          creationText="The BMW XM is a groundbreaking model, introduced as the first standalone M vehicle since the legendary M1 and as BMW’s first high-performance plug-in hybrid SUV. Launched in 2022, the XM embodies BMW’s commitment to innovation, combining extreme performance with advanced hybrid technology. It’s a bold step into the future of high-powered luxury SUVs.
          Designed by BMW’s M division, the XM is specifically engineered to deliver both sustainable power and thrilling performance, targeting enthusiasts who want luxury and environmental responsibility. The XM aims to set new standards in the high-performance SUV segment, combining efficiency with the unmistakable thrill of M power.
          With the XM, BMW is redefining its M division for the electric era, merging high-performance engineering with sustainable hybrid technology. This vehicle represents BMW’s forward-thinking vision and a desire to cater to luxury SUV drivers seeking both power and responsibility.
          "
          designText="The BMW XM’s exterior is bold, aggressive, and instantly recognizable. Its sculpted lines, wide stance, and illuminated kidney grille create a commanding presence that reflects its high-performance capabilities. The large M wheels, distinct geometric shapes, and sharp lighting give the XM a futuristic and imposing look.
          Inside, the XM’s cabin is crafted with high-end materials and a striking mix of sporty and luxurious details. Premium leather, Alcantara, and carbon-fiber accents create a refined, performance-focused ambiance. The rear seating area, often referred to as the “M Lounge,” is designed for executive-level comfort, providing a spacious and exclusive environment.
          The XM’s interior design balances BMW’s classic layout with cutting-edge features, including customizable ambient lighting and sculpted surfaces. The cabin seamlessly integrates luxury and technology, creating a comfortable, advanced, and driver-focused environment for long trips or spirited driving."
          technologyText="The BMW XM is equipped with BMW’s latest iDrive 8 system, featuring a curved display that combines a digital instrument cluster and central infotainment screen. This high-tech interface allows seamless control of navigation, media, and hybrid settings with intuitive touch, voice, and gesture controls.
          As a hybrid, the XM offers an electric-only driving mode, allowing for emission-free city driving. It also includes M-specific driving modes, letting drivers adjust performance characteristics between electric, hybrid, and full power modes to match their driving preferences and road conditions.
          The XM features advanced safety and driver assistance systems, including adaptive cruise control, active lane keeping, and collision warning systems. These features provide a high level of safety without diminishing the driving experience, allowing the driver to feel secure and in control."
          featuresText="The BMW XM’s powertrain combines a twin-turbo V8 engine with an electric motor, delivering an impressive balance of power and efficiency. With up to 750 horsepower in the top-spec version, the XM offers exhilarating acceleration and dynamic performance while reducing emissions and fuel consumption.
          Equipped with adaptive M suspension and BMW’s M xDrive all-wheel-drive system, the XM delivers exceptional handling and stability on all types of terrain. The suspension system automatically adjusts for maximum comfort and control, ensuring a smooth and responsive ride even in challenging driving conditions.
          The XM’s interior includes unique luxury touches, such as the panoramic Sky Lounge LED roof, premium sound systems, and customizable ambient lighting. Combining high performance with sustainable hybrid technology, the BMW XM redefines the concept of a high-performance SUV, delivering both luxury and a more responsible driving experience.
          "
        />
      </div>
    </>
  );
};

export default BMWXM;
