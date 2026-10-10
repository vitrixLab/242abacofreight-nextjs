"use client";

import { site } from "@/data/site";

const form = site.contact.form;

export default function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(form.successMessage);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="firstName">{form.fields.firstName.label}</label>

          <input type="text" id="firstName" name="firstName" required />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">{form.fields.lastName.label}</label>

          <input type="text" id="lastName" name="lastName" required />
        </div>

        <div className="form-group full">
          <label htmlFor="email">{form.fields.email.label}</label>

          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group full">
          <label htmlFor="phone">{form.fields.phone.label}</label>

          <input type="tel" id="phone" name="phone" />
        </div>

        <div className="form-group full">
          <label htmlFor="service">{form.fields.service.label}</label>

          <select id="service" name="service">
            <option value="">{form.fields.service.placeholder}</option>

            {form.fields.service.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group full">
          <label htmlFor="message">{form.fields.message.label}</label>

          <textarea
            id="message"
            name="message"
            placeholder={form.fields.message.placeholder}
          ></textarea>
        </div>

        <div className="form-group full">
          <button type="submit" className="btn btn-primary submit-btn">
            {form.submitLabel}
          </button>
        </div>
      </div>
    </form>
  );
}
