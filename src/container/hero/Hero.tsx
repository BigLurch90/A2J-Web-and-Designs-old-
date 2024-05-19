import React from "react";
import HeroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Ready to elevate your online presence?
          </h1>
          <p className="hero__text">
            Let's build something amazing together. Explore our portfolio and
            connect with us today.
          </p>
          <div className="hero__buttons">
            <a href="#work">
              <button className="hero__button">Our Work</button>
            </a>
            <a href="#contact">
              <button className="hero__button">Contact Us</button>
            </a>
          </div>
        </div>

        <figure className="hero__image">
          <img src={HeroImage} alt="Hero image of workstation" />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
