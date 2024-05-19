import { One, SpaceApeJazzClub, AutoCity, Musiklagret } from "./import";

const ImgScroll = () => {
  return (
    <div className="img-scroll" data-animated="true">
      <div className="img-scroll__inner">
        <ul className="img-scroll__menu">
          <li className="img-scroll__item">
            <a href="./" className="img-scroll__link">
              <img src={One} alt="Image of project One." />
            </a>
          </li>
          <li className="img-scroll__item">
            <a href="./" className="img-scroll__link">
              <img
                src={SpaceApeJazzClub}
                alt="Images of project Space Ape Jazz Club"
              />
            </a>
          </li>
          <li className="img-scroll__item">
            <a href="./" className="img-scroll__link">
              <img src={AutoCity} alt="Image of project Auto City" />
            </a>
          </li>
          <li className="img-scroll__item">
            <a href="./" className="img-scroll__link">
              <img src={Musiklagret} alt="Image of project Musiklagret" />
            </a>
          </li>
          <li className="img-scroll__item">
            <a href="./" className="img-scroll__link">
              <img src={One} alt="Image of project One." />
            </a>
          </li>
          <li className="img-scroll__item">
            <a href="./" className="img-scroll__link">
              <img
                src={SpaceApeJazzClub}
                alt="Images of project Space Ape Jazz Club"
              />
            </a>
          </li>
          <li className="img-scroll__item">
            <a href="./" className="img-scroll__link">
              <img src={AutoCity} alt="Image of project Auto City" />
            </a>
          </li>
          <li className="img-scroll__item">
            <a href="./" className="img-scroll__link">
              <img src={Musiklagret} alt="Image of project Musiklagret" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImgScroll;
