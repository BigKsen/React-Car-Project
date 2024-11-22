import style from "./BMWModels.module.css";
import ModelOverview from "../../Composants/ModelOverview/ModelOverview";
import TurningBMWM81 from "../../assets/images/BMW/M8/Ready/Resized/TurningBMWM8front.avif";
import TurningBMWM82 from "../../assets/images/BMW/M8/Ready/Resized/TurningBMWM8side.avif";
import TurningBMWM83 from "../../assets/images/BMW/M8/Ready/Resized/TurningBMWM8back2.avif";
import TurningBMWM84 from "../../assets/images/BMW/M8/Ready/Resized/TurningBMWM8back.avif";
import BackBtn from "../../Composants/BackBtn/BackBtn";

const BMWM8 = () => {
  //affichage
  return (
    <>
      <BackBtn />

      <div className={style.mainBMWModels}>
        <ModelOverview
          image={[TurningBMWM81, TurningBMWM82, TurningBMWM83, TurningBMWM84]}
          alt="image de BMW M8"
          creationText="The BMW M8 was introduced as the pinnacle of BMW’s M series, merging luxury and high-performance engineering in a grand tourer. Originally launched in 2019, the M8 represents BMW’s commitment to pushing the boundaries of power and speed, built for those who seek a thrilling driving experience within a luxurious package.
          Crafted by BMW’s M division, which specializes in motorsport-inspired vehicles, the M8 embodies the brand’s racing heritage combined with refined elegance. Available in both coupe and convertible forms, the M8 was designed to be equally at home on winding roads and racetracks, offering drivers a versatile and thrilling performance car.
          The M8 is built to captivate enthusiasts who value BMW’s iconic driving dynamics. It represents BMW’s dedication to innovation, blending top-tier engineering, power, and high-end craftsmanship in a vehicle that stands out in both style and performance."
          designText="The BMW M8 is designed to make an impression with its bold, muscular stance and sleek silhouette. The aggressive front fascia, wide kidney grille, and aerodynamic lines showcase its power and performance focus, while still embodying BMW’s iconic design language.
          Inside, the M8’s cabin combines luxurious materials and sporty elements. Premium leather, Alcantara, and carbon-fiber trim create an environment that’s both elegant and performance-oriented. The M-specific seats are crafted to provide excellent support during spirited driving while delivering supreme comfort on long journeys.
          The cockpit is driver-focused, with intuitive controls and M-specific displays that emphasize performance metrics like speed, gear selection, and engine output. The attention to detail in the M8’s interior design makes it clear that it’s built for those who love to drive while surrounded by luxury.
          "
          technologyText="The M8 is equipped with BMW’s iDrive 7 infotainment system, which includes a high-resolution touchscreen and BMW’s Live Cockpit Professional. This intuitive setup provides seamless control over navigation, media, and car settings, with M-specific displays that highlight key performance data.
          The M8 also features BMW’s M Mode, allowing drivers to switch between Road, Sport, and Track settings to adjust performance characteristics. This flexibility lets the driver tailor the car’s dynamics to suit different driving situations, from relaxed cruising to high-speed track driving.
          Advanced driver assistance systems, such as adaptive cruise control, lane departure warning, and active driving assist, come standard in the M8. These features provide an added layer of safety and convenience, allowing drivers to enjoy the car’s high performance without compromising on modern driving aids."
          featuresText="At the heart of the BMW M8 is a powerful 4.4-liter twin-turbo V8 engine that delivers breathtaking acceleration and top speeds. Paired with BMW’s M xDrive all-wheel-drive system, the M8 provides exceptional handling and stability, with the option to switch to rear-wheel drive for a more dynamic feel.
          The M8 features adaptive M suspension, which continuously adjusts to road conditions for optimal comfort and performance. This advanced suspension system enhances the car’s agility and balance, ensuring a smooth ride on all types of roads while maintaining the sharp handling expected of a BMW M car.
          Distinctive features like the M Sport exhaust, carbon-fiber roof (on the coupe), and customizable interior details add to the exclusivity of the M8. From its race-inspired performance to its luxurious design elements, the BMW M8 is a top choice for those who desire a refined, high-performance sports car."
        />
      </div>
    </>
  );
};

export default BMWM8;
