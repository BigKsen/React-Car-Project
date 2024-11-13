import "./Footer.module.css";
import style from "./Footer.module.css";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <p className={style.copyright}>© Copyright Kozjanova Ksenia</p>
      <div className={style.media}>
        {/* Lien vers la page Facebook */}
        <a
          href="https://www.facebook.com/votrepagedefacebook"
          target="_blank"
          rel="noopener noreferrer">
          <img src={facebook} alt="logo facebook" />
        </a>

        {/* Lien vers la page Instagram */}
        <a
          href="https://www.instagram.com/votrecompteinstagram"
          target="_blank"
          rel="noopener noreferrer">
          <img src={instagram} alt="logo insta" />
        </a>

        {/* Lien vers la page LinkedIn */}
        <a
          href="https://www.linkedin.com/in/votrenom"
          target="_blank"
          rel="noopener noreferrer">
          <img src={linkedin} alt="logo linkedin" />
        </a>
      </div>
      <p className={style.policy}>Private Policy</p>
    </footer>
  );
};

export default Footer;
