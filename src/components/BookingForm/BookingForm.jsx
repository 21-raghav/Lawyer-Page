import { useState } from 'react';
import './BookingInfo.css'; // Import the CSS file

const BookingInfo = () => {
  const [faq, setFaq] = useState({
    legalAid: false,
    freeConsultation: false,
    afterContact: false,
    inPerson: false,
    confidential: false,
  });

  const toggleFaq = (key) => {
    setFaq({ ...faq, [key]: !faq[key] });
  };

  return (
    <div className="booking-info">
      <section>
        <h2>Booking Info</h2>
        <p>
          To get started with the process, all you clients need to book a consultation with one of our lawyers. The duration of the meeting is 30 minutes and the fee ranges from $300 to $375 CAD (+ tax) depending on the lawyer&apos;s experience. It is important to note that the fee is due to be used as a credit towards future legal services and we can then continue to see you for up to 30 days at your convenience. The purpose of the consultation is to help you evaluate yourself with our lawyers, learn about the various legal services available to you, and to get a general idea about the estimated time and fees required to resolve your legal issues. There is no obligation to move on to the next step of the consultation, but we can move quickly with next steps if when you&apos;re ready to move forward with our firm.
        </p>
        <div className="contact-options">
          <div>
            <h3>Write to Us</h3>
            <p>Submit our online form and we&apos;ll respond to your enquiry within two business hours.</p>
            <button>Online Form</button>
          </div>
          <div>
            <h3>Talk to Us</h3>
            <p>Call us during regular business hours to instantly speak with our legal team.</p>
            <button>(555) 555-5555</button>
          </div>
        </div>
      </section>
      <section>
        <h2>Questions?</h2>
        <div className="faq">
          <div onClick={() => toggleFaq('legalAid')}>
            <h4>Do you accept Legal Aid? {faq.legalAid ? '-' : '+'}</h4>
            {faq.legalAid && <p>Answer to legal aid question.</p>}
          </div>
          <div onClick={() => toggleFaq('freeConsultation')}>
            <h4>Do you offer free consultations? {faq.freeConsultation ? '-' : '+'}</h4>
            {faq.freeConsultation && <p>Answer to free consultation question.</p>}
          </div>
          <div onClick={() => toggleFaq('afterContact')}>
            <h4>What happens after I contact your firm? {faq.afterContact ? '-' : '+'}</h4>
            {faq.afterContact && <p>Answer to after contact question.</p>}
          </div>
          <div onClick={() => toggleFaq('inPerson')}>
            <h4>Are the consultations in person? {faq.inPerson ? '-' : '+'}</h4>
            {faq.inPerson && <p>Answer to in-person consultation question.</p>}
          </div>
          <div onClick={() => toggleFaq('confidential')}>
            <h4>Is the consultation confidential? {faq.confidential ? '-' : '+'}</h4>
            {faq.confidential && <p>Answer to confidential consultation question.</p>}
          </div>
        </div>
      </section>
      <section>
        <h2>Online Form</h2>
        <form>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>How can we help you?</label>
            <textarea></textarea>
          </div>
          <div>
            <input type="checkbox" />
            <label>You give us permission to respond to you by email</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default BookingInfo;
