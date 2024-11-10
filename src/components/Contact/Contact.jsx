import "./Contact.css";

const Contact = () => {
    return (
    <div className="contact">
        <div className="contact_card">
            <img src="./icon_location.svg" alt="address icon"/>
            <h4>Address</h4>
            <p>Chamber No. 332, Western Wing Tis Hazari Court, Delhi-110054</p>
        </div>
        <div className="contact_card">
            <img src="./icon_phone_dark.svg" alt="phone icon"/>
            <h4>Phone</h4>
            <p><strong>Yash Rawat:</strong> <a href="tel:+91-9818920431">+91 98189 20431</a></p>
        </div>
        <div className="contact_card">
            <img src="./icon_mail_dark.svg" alt="email icon"/>
            <h4>Email</h4>
            <a href="mailto:yashrawat776@gmail.com">yashrawat776@gmail.com</a>
        </div>
    </div>
    );
};

export default Contact;