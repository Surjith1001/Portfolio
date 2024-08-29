import React from 'react';
import '../styles.css';

const ContactForm = () => {
    return (
        <div className="container">
            <h2>Contact Me</h2>
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
                    <label>Message</label>
                    <textarea />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactForm;
