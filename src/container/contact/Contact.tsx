import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  HiDevicePhoneMobile,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__inner">
        <form
          action="info@a2jwebdesigns.com"
          method="post"
          encType="text/plain"
          className="contact__form"
        >
          <h2 className="contact__title">Contact Us</h2>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="request">Your Request:</label>
          <textarea name="request" id="request"></textarea>
          <input type="submit" value="Send" />
        </form>

        <div className="contact__info">
          <HiOutlineMail color="#F1F1F1" size={48} />
          <p>info@a2jwebdesigns.com</p>
          <HiOutlineInformationCircle color="#F1F1F1" size={48} />
          <p>
            We will reply as
            <br /> soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
