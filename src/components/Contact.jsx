import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const [errors, setErrors] = useState({ name: false, email: false, message: false });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: false });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (value.trim() === '') {
            setErrors({ ...errors, [name]: true });
        } else {
            setErrors({ ...errors, [name]: false });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const emailValid = formData.email.trim() === '' || validateEmail(formData.email);

    return (
        <div id="contactForm">
            {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1>Questions? Reach out to me!</h1>
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} required />
                        {errors.name && <span className="error">Name is required</span>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required />
                        {errors.email && <span className="error">Email is required</span>}
                        {!errors.email && !emailValid && (
                            <span className="error">Invalid email format</span>
                        )}
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} required />
                        {errors.message && <span className="error">Message is required</span>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <p>Form submitted</p>
            )}
        </div>
    );
};

export default Contact;
