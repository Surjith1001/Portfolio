import React from 'react';
import '../styles.css'; // Import your CSS file

const Contact = () => {
    return (
        <div className="container contact-page">
            <div className="contact-header">
                <h1>Contact Me</h1>
                <p>If you have any questions or would like to get in touch, feel free to contact me using the form below.</p>
            </div>
            <form className="contact-form">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
