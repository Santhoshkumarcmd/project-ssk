import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        const errorData = await response.json();
        // Spring validation errors may be in errorData.errors or errorData.fieldErrors
        if (errorData.errors) {
          setErrors(errorData.errors);
        } else if (errorData.fieldErrors) {
          // Sometimes errors are in fieldErrors array
          const newErrors = {};
          errorData.fieldErrors.forEach(err => {
            newErrors[err.field] = err.defaultMessage;
          });
          setErrors(newErrors);
        } else {
          setErrors({ general: errorData.message || 'Submission failed. Please try again.' });
        }
      }
    } catch (error) {
      setErrors({ general: 'Network error. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h2>Contact Us</h2>
        <p>Send us a message and we'll get back to you shortly</p>
      </div>
      {submitted ? (
        <div className="contact-form-success">
          <div className="success-icon">✓</div>
          <h3>Message Sent Successfully!</h3>
          <p>We'll respond to your inquiry as soon as possible.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {errors.general && <div className="form-error">{errors.general}</div>}
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={errors.name ? 'error' : ''}
              required
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={errors.email ? 'error' : ''}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={errors.subject ? 'error' : ''}
              required
            />
            {errors.subject && <span className="error-message">{errors.subject}</span>}
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className={errors.message ? 'error' : ''}
              required
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;