import SocialLinks from "../SocialLinks/SocialMediaLinks";
import "./ContactBar.css";

const ContactBar = () => {
  return (
    <div className="contactbar">
        <div className="contactbar_wrapper">
            <ul className="contact_list">
                <li><a className="link" href="tel:+91-9818920431"><img src="./icon_phone.svg" alt="phone"/><span className="text">+91 98189 20431</span></a></li>
                <li><a className="link" href="https://wa.me/+919818920431"><img src="./icon_whatsapp.svg" alt="whatsapp"/><span className="text">+91 98189 20431</span></a></li>
                <li><a className="link" href="mailto:yashrawat776@gmail.com"><img src="./icon_mail.svg" alt="email"/><span className="text">yashrawat776@gmail.com</span></a></li>
            </ul>
            <SocialLinks />
        </div>
    </div>
  );
};

export default ContactBar;
