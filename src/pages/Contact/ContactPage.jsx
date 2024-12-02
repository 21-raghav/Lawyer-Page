import Contact from "../../components/Contact/Contact";

import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section>
      <div className="contact__heading__wrapper">
        <h2 className="contact__heading">Contact Page</h2>
      </div>
      <Contact />
    </section>
  );
};

export default ContactPage;
