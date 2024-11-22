import style from "./MercedesModels.module.css";
import ModelOverview from "../../Composants/ModelOverview/ModelOverview";
import TurningMercedesGLE1 from "../../assets/images/Mercedes/GLE/Ready/Resized/TurningMercedesGLEfront.avif";
import TurningMercedesGLE2 from "../../assets/images/Mercedes/GLE/Ready/Resized/TurningMercedesGLEside.avif";
import TurningMercedesGLE3 from "../../assets/images/Mercedes/GLE/Ready/Resized/TurningMercedesGLEback2.avif";
import TurningMercedesGLE4 from "../../assets/images/Mercedes/GLE/Ready/Resized/TurningMercedesGLEback.avif";
import BackBtn from "../../Composants/BackBtn/BackBtn";

const MercedesGLE = () => {
  //affichage
  return (
    <>
      <BackBtn />

      <div className={style.mainMercedesModels}>
        <ModelOverview
          image={[
            TurningMercedesGLE1,
            TurningMercedesGLE2,
            TurningMercedesGLE3,
            TurningMercedesGLE4,
          ]}
          alt="image de Mercedes GLE"
          creationText="The Mercedes-Benz GLE is a luxury SUV that blends style, comfort, and cutting-edge technology. First introduced as the M-Class in the late 1990s, it was rebranded as the GLE in 2015, aligning with Mercedes’ new naming structure for SUVs. The GLE is designed to cater to drivers who desire the versatility of an SUV combined with the refinement and prestige of a luxury sedan.
          Engineered for both urban environments and off-road adventures, the GLE represents Mercedes-Benz's commitment to innovation, performance, and comfort. With each generation, the GLE has evolved to offer more advanced technology, improved efficiency, and enhanced safety features, positioning it as a flagship in the luxury SUV segment.
          The GLE embodies Mercedes’ dedication to blending luxury with functionality, making it a top choice for families and adventure-seekers alike. It’s a vehicle that reflects the brand's legacy while incorporating forward-thinking features for modern driving needs."
          designText="The exterior design of the GLE combines a robust, athletic stance with elegant lines, creating a balance of ruggedness and sophistication. The signature front grille, LED lighting, and aerodynamic contours give the GLE a commanding yet refined presence, highlighting its versatility as both a city cruiser and an off-road performer.
          Inside, the GLE’s cabin is spacious and meticulously crafted, with high-end materials like leather, wood, and metal accents that create a luxurious feel. The seating is designed for maximum comfort, with ample legroom and configurable options, making it an ideal choice for long journeys or family outings.
          The GLE’s interior also features ambient lighting and customizable seating arrangements, creating a comfortable and tailored environment. Mercedes’ attention to detail is evident in every element of the cabin, making it a harmonious blend of elegance and utility.
          "
          technologyText="The Mercedes GLE is equipped with the latest MBUX (Mercedes-Benz User Experience) system, featuring dual high-resolution screens that serve as the digital instrument cluster and central infotainment hub. This system offers voice control, navigation, and smartphone connectivity, creating an intuitive and immersive experience for all passengers.
          The GLE also includes advanced driver assistance features, such as adaptive cruise control, active lane-keeping assist, and blind-spot monitoring. These systems enhance safety and make the driving experience more comfortable, allowing drivers to feel secure and confident on the road.
          Additionally, the GLE offers off-road driving modes and terrain management systems, making it capable of handling various terrains. These options let drivers adjust performance settings for different conditions, allowing the GLE to perform as well off-road as it does on city streets."
          featuresText="The Mercedes GLE comes with a range of powerful engine options, including turbocharged four-cylinder, six-cylinder, and even a V8 option in the AMG models. These engines deliver impressive power and efficiency, making the GLE suitable for both daily commuting and spirited driving.
          Equipped with Mercedes’ AIRMATIC air suspension, the GLE offers a smooth, adaptive ride that adjusts to road conditions in real-time. This suspension provides optimal comfort and stability, giving the GLE a refined ride quality that’s expected of a luxury SUV, whether on highways or rough terrain.
          The GLE’s interior is loaded with luxury features, such as heated and ventilated seats, premium sound systems, and a spacious cargo area. With its versatile seating and high-end materials, the GLE caters to those who value both practicality and luxury, making it an ideal choice for families, adventurers, and luxury SUV enthusiasts alike"
        />
      </div>
    </>
  );
};

export default MercedesGLE;
