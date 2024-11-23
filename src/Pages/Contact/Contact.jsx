import ContactForm from "../../Composants/ContactForm/ContactForm";
import style from "./Contact.module.css";
import Saloon from "../../assets/images/saloon.avif";

const Contact = () => {
  return (
    <>
      <div className={style.mainContact}>
        <div className={style.visitCard}>
          <img src={Saloon} alt="dealers saloon" />
          <table>
            <tr>
              <td>Address</td>
              <td>avenue Molière 320</td>
            </tr>
            <tr>
              <td>Telephone</td>
              <td>+32 (2) 215.20.00</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>info@regal-ride.com</td>
            </tr>
            <tr>
              <td>Opening Hours</td>
              <td>Monday-Saturday - 8 am - 6 pm</td>
            </tr>
          </table>
        </div>
        <div className={style.contactForm}>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
