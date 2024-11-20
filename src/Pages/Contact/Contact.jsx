import ContactForm from "../../Composants/ContactForm/ContactForm";
import style from "./Contact.module.css"


const Contact = () => {

const contactForm =()=>{



}

  return (
      <>
          <div className={style.mainContact}>
              <div className={style.visitCard}>
                  <img src="" alt="dealers saloon" />
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
              <div className={style.contactForm}><ContactForm/></div>
          </div>
      </>
  );
};

export default Contact;



