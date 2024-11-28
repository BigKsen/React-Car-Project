import style from "./Policy.module.css";
import BackBtn from "../BackBtn/BackBtn";

const Policy = () => {
  return (
    <div className={style.mainPolicy}>
      <BackBtn />
      <div className={style.mainPolicyText}>
        <h3>Privacy Policy for REGAL-RIDE APP</h3>
        <h4>Effective Date: 02/12/2024</h4>
        <p>
          At REGAL-RIDE APP, your privacy is important to us. This Privacy
          Policy outlines the way we collect, use, and protect information in
          our app. Please read this policy carefully to understand how we handle
          user data and the scope of the app’s content.
        </p>
        <h4>1. Purpose of the App</h4>
        <p>
          REGAL-RIDE APP is a personal, educational project created solely for
          learning and showcasing the skills developed in web development,
          particularly React, HTML, CSS, and other frontend technologies. This
          app was built as part of a self-learning experience and is not
          intended for commercial use, competition, or marketing.
        </p>
        <h4>2. AI-Generated Content</h4>
        <p>
          All text, images, and other media content presented within the app
          have been generated through Artificial Intelligence AI. The use of
          AI-generated content is solely for the purpose of demonstrating
          frontend development techniques and the capabilities of AI tools. The
          content does not represent real-world entities, brands, or products.
          Any resemblance to actual brands, logos, or products is purely
          coincidental.
        </p>
        <h4>3. Non-Commercial Use</h4>
        <p>
          This app is not affiliated with any real-world automobile brands,
          manufacturers, or companies. It does not intend to replicate or
          compete with any existing products or services in the automobile
          industry. The app's content is entirely for educational purposes, and
          there are no financial transactions or commercial interests involved
          in its operation.
        </p>
        <h4>4. No Harmful Intent</h4>
        <p>
          The app was developed with the intention of enhancing learning and
          sharing knowledge of web development. There is no intent to mislead,
          confuse, or harm any individual, organization, or brand. Users should
          understand that the app is purely a demonstration of coding skills,
          not a commercial product or service.
        </p>
        <h4>5. Data Collection and Usage</h4>
        <p>
          REGAL-RIDE APP does not collect any personal data from users. The app
          does not require any registration, subscription, or the provision of
          personal information for access. It is important to note that if the
          app contains third-party integrations such as analytics tools or ads,
          those may collect user data in accordance with their respective
          privacy policies.
        </p>
        <h4>6. Security of User Data</h4>
        <p>
          As a non-commercial educational project, REGAL-RIDE APP does not store
          or process sensitive user data. We do not collect identifiable
          information unless explicitly stated otherwise. However, we take
          reasonable steps to protect any data that may be transmitted through
          the app.
        </p>
        <h4>7. User Responsibilities</h4>
        <p>
          By using REGAL-RIDE APP, users agree to use the app in a manner
          consistent with its educational and non-commercial purpose. Any misuse
          of the app, including but not limited to, creating misleading
          impressions of its nature, is strictly prohibited. 8. External Links
          REGAL-RIDE APP may contain links to external websites or resources for
          educational purposes. We are not responsible for the content or
          privacy practices of any third-party sites. Users are encouraged to
          review the privacy policies of any linked websites before sharing
          personal information. 9. Changes to the Privacy Policy We reserve the
          right to modify or update this Privacy Policy at any time. Any changes
          will be posted on this page with an updated effective date. We
          encourage users to review this policy periodically to stay informed
          about how we are protecting their data. 10. Contact Information If you
          have any questions or concerns about this Privacy Policy or the
          practices of REGAL-RIDE APP, please feel free to contact us at&nbsp;
          <span>ksenia.kozjanova@hotmail.com</span>. Disclaimer: This Privacy
          Policy is for informational purposes and provides a general outline
          based on the information you provided. It is always a good idea to
          consult with a legal professional to ensure that your privacy policy
          fully complies with any applicable regulations, such as GDPR or CCPA,
          depending on your user base and location.
        </p>
      </div>
    </div>
  );
};

export default Policy;
