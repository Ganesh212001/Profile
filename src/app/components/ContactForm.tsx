"use client";

import React, { useState } from "react";
import "./contactForm.css";

export default function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    validate: "",
  };

  const [text, setText] = useState(initialState);

  const handleTextChange = (e: Event | any) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: "" });
  };

  const hamdleSubmitForm = async (e: Event | any) => {
    e.preventDefault();
    if (
      text.name === "" ||
      text.email === "" ||
      text.email === "" ||
      text.message === ""
    ) {
      setText({ ...text, validate: "incomplete" });
      return;
    }

    //Post request sent to contact API
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      });
      setText({ ...text, validate: "loading" });

      const result = await response.json();
      if (result) {
        setText({ ...text, validate: "success" });
        console.log("Success:", result);
      }
    } catch (error) {
      setText({ ...text, validate: "error" });
      console.log("Error", error);
    }
  };
  return (
    <form className="contact-form" onSubmit={hamdleSubmitForm}>
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            value={text.name}
            placeholder="Your Name"
            onChange={handleTextChange}
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            name="email"
            className="form-control"
            value={text.email}
            placeholder="Your Email"
            onChange={handleTextChange}
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          name="subject"
          className="form-control"
          value={text.subject}
          placeholder="Subject"
          onChange={handleTextChange}
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          rows={5}
          name="message"
          className="form-control"
          value={text.message}
          placeholder="Message"
          onChange={handleTextChange}
        />
      </div>
      <div className="my-3">
        {text.validate === "loading" && (
          <div className="loading">Sending Message</div>
        )}
        {text.validate === "incomplete" && (
          <div className="error-message">Please fill in all above details</div>
        )}
        {text.validate === "error" && (
          <div className="sent-message">
            Your Message was sent we will contact you ASAP. than you
          </div>
        )}
        {text.validate === "erroe" && (
          <div className="error-message">Server Error</div>
        )}
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}
