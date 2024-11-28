import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./ContactForm.module.css"; // Assurez-vous que le fichier CSS est bien importé

const ContactForm = () => {
  // États pour chaque champ du formulaire
  const [firstNameContact, setfirstNameContact] = useState("");
  const [lastNameContact, setlastNameContact] = useState("");
  const [telephoneContact, settelephoneContact] = useState("");
  const [emailContact, setemailContact] = useState("");
  const [messageContact, setmessageContact] = useState("");

  // Récupération du navigate (hook de redirection)
  const navigate = useNavigate();

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page

    // Créer un objet avec toutes les données du formulaire
    const formData = {
      firstNameContact,
      lastNameContact,
      telephoneContact,
      emailContact,
      messageContact,
    };

    // Créer un objet qui inclut le titre et les données du formulaire
    const dataToSend = {
      title: "CONTACT Request", // Ajouter le titre ici
      formData, // Inclure les données du formulaire
    };

    // Envoyer les données au serveur
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend), // Envoyer le nouvel objet
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Your data has been submitted successfully!");
        handleReset(); // Réinitialiser les champs après soumission
        navigate("/final");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting your data.");
      });

    // Réinitialiser les champs du formulaire après soumission
    handleReset();
  };

  // Fonction pour réinitialiser le formulaire
  const handleReset = () => {
    setfirstNameContact("");
    setlastNameContact("");
    settelephoneContact("");
    setemailContact("");
    setmessageContact("");
  };

  return (
    <>
      <div className={style["form-container"]}>
        <form onSubmit={handleSubmit} className={style.FormContactForm}>
          <div className={style.contactFormRow}>
            <label htmlFor="firstNameContact">First Name</label>
            <input
              type="text"
              id="firstNameContact"
              name="firstNameContact"
              value={firstNameContact}
              onChange={(e) => setfirstNameContact(e.target.value)}
              required
            />
          </div>

          <div className={style.contactFormRow}>
            <label htmlFor="lastNameContact">Last Name</label>
            <input
              type="text"
              id="lastNameContact"
              name="lastNameContact"
              value={lastNameContact}
              onChange={(e) => setlastNameContact(e.target.value)}
              required
            />
          </div>

          <div className={style.contactFormRow}>
            <label htmlFor="telephoneContact">Telephone</label>
            <input
              type="tel"
              id="telephoneContact"
              name="telephoneContact"
              value={telephoneContact}
              onChange={(e) => settelephoneContact(e.target.value)}
              required
            />
          </div>

          <div className={style.contactFormRow}>
            <label htmlFor="emailContact">Email</label>
            <input
              type="email"
              id="emailContact"
              name="emailContact"
              value={emailContact}
              onChange={(e) => setemailContact(e.target.value)}
              required
            />
          </div>

          <div className={style.contactFormRow}>
            <label htmlFor="messageContact">Message</label>
            <textarea
              id="messageContact"
              name="messageContact"
              value={messageContact}
              onChange={(e) => setmessageContact(e.target.value)}
              required></textarea>
          </div>

          <div className={style.contactFormBtns}>
            <button className={style.contactFormSend}  type="submit">SEND</button>
            <button className={style.contactFormReset}type="button" onClick={handleReset}>
              RESET
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
