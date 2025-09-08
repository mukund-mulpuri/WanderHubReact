import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Email: support@wanderhub.com</p>
      <p>Phone: +91 9876543210</p>

      <form>
        <input type="text" placeholder="Your Name" /><br /><br />
        <input type="email" placeholder="Your Email" /><br /><br />
        <textarea placeholder="Your Message"></textarea><br /><br />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;
