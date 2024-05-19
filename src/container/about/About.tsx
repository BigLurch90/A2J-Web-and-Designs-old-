import React from "react";
import { JonasImage, AndreaImage } from "./import";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="about__title-mobile">Who Are We</h2>
      <div className="about__inner">
        <h2 className="about__title">
          Who
          <br />
          Are
          <br />
          We
        </h2>
        <figure className="about__images">
          <img src={JonasImage} alt="Image of Jonas" className="about__image" />
          <p>Jonas Johansson</p>
          <img
            src={AndreaImage}
            alt="Image of Andréa"
            className="about__image"
          />
          <p>Andréa Vallberg</p>
        </figure>
        <div className="about__content">
          <h3>Meet A2J Web & Designs</h3>
          <div className="about__line"></div>
          <p>
            Meet the creative minds behind our digital transformations. Our
            diverse team brings together a blend of artistic flair, technical
            prowess, and a shared passion for delivering exceptional digital
            experiences. Together, we're dedicated to turning your ideas into
            visually stunning and functionally seamless realities.
          </p>
          <h4>Our misson</h4>
          <p>
            We want to empowering growth through transformative digital
            experiences, we are dedicated to helping businesses and individuals
            thrive in the ever-evolving digital landscape. Our mission is to go
            beyond the ordinary, crafting innovative solutions that inspire,
            connect, and propel our clients towards their aspirations.
          </p>
          <button className="about__button">Hire us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
