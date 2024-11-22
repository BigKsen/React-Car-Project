import style from "./MercedesModels.module.css";
import ModelOverview from "../../Composants/ModelOverview/ModelOverview";
import TurningMercedesCLE1 from "../../assets/images/Mercedes/CLE/Ready/Resized/TurningMercedesCLEfront.avif";
import TurningMercedesCLE2 from "../../assets/images/Mercedes/CLE/Ready/Resized/TurningMercedesCLEside.avif";
import TurningMercedesCLE3 from "../../assets/images/Mercedes/CLE/Ready/Resized/TurningMercedesCLEback2.avif";
import TurningMercedesCLE4 from "../../assets/images/Mercedes/CLE/Ready/Resized/TurningMercedesCLEback.avif";
import BackBtn from "../../Composants/BackBtn/BackBtn";

const MercedesCLE = () => {
  //affichage
  return (
    <>
      <BackBtn />

      <div className={style.mainMercedesModels}>
        <ModelOverview
          image={[
            TurningMercedesCLE1,
            TurningMercedesCLE2,
            TurningMercedesCLE3,
            TurningMercedesCLE4,
          ]}
          alt="image de Mercedes CLE"
          creationText="The Mercedes-Benz CLE is a recent addition to the Mercedes lineup, launched to unify the brand’s mid-size coupe and convertible offerings. Positioned as a replacement for both the C-Class and E-Class coupes and convertibles, the CLE merges the best features of both series into one refined model. It is built for those who seek a blend of sportiness and luxury in a sleek two-door package.
          With the CLE, Mercedes aims to streamline its offerings while enhancing the driving experience through refined engineering and cutting-edge technology. It embodies the essence of both the C-Class’s agility and the E-Class’s luxury, resulting in a model that appeals to drivers who want sophistication and performance.
          Crafted with Mercedes-Benz’s commitment to luxury and precision, the CLE is designed to provide the ideal mix of dynamic performance and comfort. It represents the brand’s dedication to innovation, with a sleek design, high-tech features, and powerful engines that make it a versatile choice in the coupe and convertible segments.
          "
          designText="The Mercedes CLE’s exterior design combines elegance with a sporty edge. Its flowing lines, prominent grille, and distinctive LED headlights create a modern, aerodynamic silhouette that commands attention. The long hood, low stance, and muscular fenders give the CLE a dynamic and luxurious presence on the road.
          Inside, the CLE features a meticulously crafted cabin that blends sportiness and comfort. Premium materials, including leather upholstery, wood trims, and metal accents, create a luxurious feel. The driver-focused cockpit layout ensures that every control is within easy reach, while the spacious interior design enhances comfort for both driver and passengers.
          The CLE’s interior also incorporates Mercedes-Benz’s signature ambient lighting, allowing drivers to personalize the atmosphere of the cabin. The design philosophy seamlessly integrates luxury and modernity, making it ideal for drivers who value both aesthetics and function."
          technologyText="The Mercedes CLE is equipped with the latest MBUX (Mercedes-Benz User Experience) system, offering a high-resolution touchscreen display and digital instrument cluster. This intelligent infotainment system includes voice activation, navigation, and smartphone integration, creating a seamless digital experience for the driver and passengers.
          Driver assistance features are abundant in the CLE, including adaptive cruise control, lane-keeping assist, and active brake assist. These systems provide additional safety and convenience, allowing drivers to enjoy the performance of the CLE without sacrificing peace of mind on the road.
          Mercedes also offers the CLE with advanced driving modes, allowing drivers to switch between comfort, sport, and eco settings to tailor the vehicle’s performance. This feature gives the CLE versatility, letting it perform as both a comfortable cruiser and a sporty coupe depending on the driver’s preference."
          featuresText="The Mercedes CLE offers a range of powerful engine options, including turbocharged four-cylinder and six-cylinder engines, providing a balance of efficiency and performance. These engines deliver strong acceleration and smooth power delivery, making the CLE enjoyable to drive on both city streets and highways.
          The CLE is equipped with Mercedes’ AIRMATIC air suspension system, which adapts to road conditions and provides a comfortable, smooth ride. This suspension system enhances the car’s handling dynamics, giving drivers a refined and agile driving experience that’s both sporty and luxurious.
          The CLE’s cabin is designed with comfort and convenience in mind, featuring premium sound systems, heated seats, and a power-operated roof in the convertible model. From its high-quality materials to its tech-forward features, the CLE embodies the luxury and innovation that define Mercedes-Benz, offering a versatile and stylish choice for coupe enthusiasts."
        />
      </div>
    </>
  );
};

export default MercedesCLE;
