import style from "./BMWModels.module.css";
import ModelOverview from "../../Composants/ModelOverview/ModelOverview";
import TurningBMWi71 from "../../assets/images/BMW/I7/Ready/Resized/TurningBMWi7front.avif";
import TurningBMWi72 from "../../assets/images/BMW/I7/Ready/Resized/TurningBMWi7side2.avif";
import TurningBMWi73 from "../../assets/images/BMW/I7/Ready/Resized/TurningBMWi7side.avif";
import TurningBMWi74 from "../../assets/images/BMW/I7/Ready/Resized/TurningBMWi7back.avif";
import BackBtn from "../../Composants/BackBtn/BackBtn";

const BMWi7 = () => {
  //affichage
  return (
    <>
      <BackBtn />

      <div className={style.mainBMWModels}>
        <ModelOverview
          image={[TurningBMWi71, TurningBMWi72, TurningBMWi73, TurningBMWi74]}
          alt="image de BMW i7"
          creationText="The BMW i7 is part of BMW's visionary i line, representing the brand's commitment to electric mobility and sustainable luxury. Launched as a flagship electric sedan, the i7 combines BMW’s iconic design with cutting-edge electric technology, aiming to redefine what a luxury sedan can be in the electric era.
          BMW developed the i7 as an all-electric counterpart to the 7 Series, offering a sustainable alternative with the same level of prestige and comfort. The i7’s design, engineering, and manufacturing processes emphasize sustainability, with eco-friendly materials and efficient production methods.
          Designed for those seeking both luxury and environmental responsibility, the i7 embodies BMW’s forward-thinking approach to electrification. This flagship model represents BMW’s vision of a cleaner, greener future without compromising on the performance and elegance for which BMW is renowned."
          designText="The exterior of the BMW i7 combines elegant proportions with a bold, futuristic aesthetic. Its sleek silhouette, distinctive kidney grille, and illuminated elements reflect BMW’s luxury heritage with a modern twist, creating an unmistakable and commanding road presence.
          Inside, the i7 offers an immersive, opulent cabin crafted with high-end materials and sustainable finishes. The interior features premium upholstery, eco-friendly materials, and customizable ambient lighting. The rear passenger area, designed with executive-level comfort, includes lounge seating and entertainment options.
          The cabin layout is minimalistic yet high-tech, with a focus on digital displays and seamless controls. BMW’s “Shy Tech” philosophy integrates essential features and buttons subtly into surfaces, creating a clean and modern atmosphere that focuses on both form and function."
          technologyText="The i7 is equipped with BMW’s latest iDrive 8 system, which includes a high-resolution curved display that combines the driver’s instrument cluster with the central infotainment screen. This system is highly intuitive, allowing seamless control of navigation, media, and vehicle settings with touch and voice commands.
          The i7 features advanced driver assistance systems, including semi-autonomous driving capabilities, to enhance safety and comfort on long journeys. Systems such as adaptive cruise control, lane-keeping assist, and emergency braking work together to support the driver in various conditions.
          The i7 also includes luxury entertainment options, such as a rear-seat theater screen and high-quality sound systems, ensuring an immersive experience for all passengers. This blend of comfort and innovation reflects BMW’s commitment to providing a luxurious yet future-focused experience."
          featuresText="The BMW i7 offers powerful electric motors and a high-capacity battery that deliver impressive range and acceleration, with the quiet, smooth power delivery characteristic of electric vehicles. Its range allows for long-distance travel with minimal charging interruptions, making it practical and versatile.
          Equipped with adaptive air suspension and BMW’s Executive Drive Pro system, the i7 delivers a remarkably smooth and balanced ride. The suspension system adjusts based on road conditions, providing a comfortable ride while maintaining BMW’s signature dynamic handling and agility.
          With features like panoramic Sky Lounge LED lighting, a fully customizable interior, and various luxury options, the i7 offers an exceptional experience for both driver and passengers. The BMW i7 combines sustainability with top-tier luxury, setting a new standard for premium electric sedans."
        />
      </div>
    </>
  );
};

export default BMWi7;
