import React from "react";
import {
  FigmaIcon,
  AdobeXdIcon,
  AdobeIllustratorIcon,
  AdobePhotoshopIcon,
  HtmlIcon,
  CssIcon,
  SassIcon,
  JavaScriptIcon,
  PhpIcon,
  MySQLIcon,
  WordPressIcon,
  NodeIcon,
} from "./import";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services__inner">
        <header className="services__description">
          <div>
            <h2 className="services__title">Services</h2>
            <p className="services__text">
              Here can you read more about our credentials and also see what we
              can offer you.
              <br />
              If there is something you wonder, you are always welcome to
              contact us.
            </p>
          </div>
          <a href="#contact" className="services__button">
            <button>Contact us</button>
          </a>
        </header>

        <div className="description-section">
          <div className="description-section__description">
            <h4 className="description-section__title">
              Web
              <br />
              Design
            </h4>
            <div className="description-section__line"></div>
            <figure className="description-section__icons">
              <img
                src={FigmaIcon}
                alt="Icon of Frigma"
                className="description-section__icon"
              />
              <img
                src={AdobeXdIcon}
                alt="Icon of Adobe XD"
                className="description-section__icon"
              />
              <img
                src={AdobeIllustratorIcon}
                alt="Icon of Adobe Illustrator"
                className="description-section__icon"
              />
              <img
                src={AdobePhotoshopIcon}
                alt="Icon of Adobe Photoshop"
                className="description-section__icon"
              />
            </figure>
          </div>

          <div className="description-section__content">
            <p className="description-section__text">
              We have knowledge in Adobe XD as well as Figma and with a good
              understanding of UI and UX, we can make sure that your site both
              looks good and works as well as possible. Then we also have
              knowledge in Adobe Illustrator and Photoshop, which enables us to
              both design images, logo and graphic elements for your website.
            </p>
          </div>
        </div>

        <div className="description-section">
          <div className="description-section__content">
            <p className="description-section__text">
              With knowledge in front-end, we can help you program your website,
              with knowledge of HTML, Css/Sass and JavaScript, so we make sure
              that you get exactly what you want.
            </p>
          </div>

          <div className="description-section__description">
            <h4 className="description-section__title">
              Front
              <br />
              End
            </h4>
            <div className="description-section__line"></div>
            <figure className="description-section__icons">
              <img
                src={HtmlIcon}
                alt="Icon of HTML5"
                className="description-section__icon"
              />
              <img
                src={CssIcon}
                alt="Icon of Css3"
                className="description-section__icon"
              />
              <img
                src={SassIcon}
                alt="Icon of Sass/scss"
                className="description-section__icon"
              />
              <img
                src={JavaScriptIcon}
                alt="Icon of JavaScript"
                className="description-section__icon"
              />
            </figure>
          </div>
        </div>

        <div className="description-section">
          <div className="description-section__description">
            <h4 className="description-section__title">
              Back
              <br />
              End
            </h4>
            <div className="description-section__line"></div>
            <figure className="description-section__icons">
              <img
                src={PhpIcon}
                alt="Icon of PhP"
                className="description-section__icon"
              />
              <img
                src={MySQLIcon}
                alt="Icon of MySGL"
                className="description-section__icon"
              />
              <img
                src={WordPressIcon}
                alt="Icon of WordPress"
                className="description-section__icon"
              />
              <img
                src={NodeIcon}
                alt="Icon of NodeJS"
                className="description-section__icon"
              />
            </figure>
          </div>

          <div className="description-section__content">
            <p className="description-section__text">
              In the backend, we mainly work with Wordpress and php. And with
              our understanding of the programs, we make sure that the website
              goes online smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
