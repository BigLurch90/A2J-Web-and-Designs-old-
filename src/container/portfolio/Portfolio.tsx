import React, { useState, useEffect, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { SpaceApeJazzClub, One, AutoCity, Musiklagret } from "./import";
import Item from "../../content/portfolio-component/Item";
import Thumbnail from "../../content/portfolio-component/Thumbnail";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    const handleShowSlider = (type: string) => {
      const nextSlide =
        type === "next" ? (currentSlide + 1) % 4 : (currentSlide - 1 + 4) % 4;
      setCurrentSlide(nextSlide);
    };

    const nextButton = document.querySelector(".next-button");
    const prevButton = document.querySelector(".prev-button");

    nextButton?.addEventListener("click", () => {
      handleShowSlider("next");
    });

    prevButton?.addEventListener("click", () => {
      handleShowSlider("prev");
    });

    return () => {
      nextButton?.removeEventListener("click", () => {
        handleShowSlider("next");
      });

      prevButton?.removeEventListener("click", () => {
        handleShowSlider("prev");
      });
    };
  }, [currentSlide]);

  return (
    <div id="work" className="portfolio">
      <div className="portfolio__inner">
        <div className="list" ref={listRef}>
          {currentSlide === 0 && (
            <Item
              imgUrl={One}
              imgDescription="Image of 'One' landing page"
              title="One."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac purus in turpis dignissim consectetur a in odio. Vestibulum convallis lacus vel dolor rhoncus, placerat consequat sapien ullamcorper. Proin lacinia ligula quis eros consectetur elementum. Morbi arcu quam, porta quis placerat a, sagittis eget augue. Praesent convallis felis arcu. Curabitur faucibus tortor eget tincidunt tempus. In hac habitasse platea dictumst. Sed in vestibulum ipsum, quis maximus leo. Vivamus cursus rhoncus nunc, ut imperdiet libero cursus eleifend. In hac habitasse platea dictumst."
              buttonLink="./"
              key={0}
            />
          )}
          {currentSlide === 1 && (
            <Item
              imgUrl={Musiklagret}
              imgDescription="Image of 'The Sixth String' landing page"
              title="The Sixth String"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac purus in turpis dignissim consectetur a in odio. Vestibulum convallis lacus vel dolor rhoncus, placerat consequat sapien ullamcorper. Proin lacinia ligula quis eros consectetur elementum. Morbi arcu quam, porta quis placerat a, sagittis eget augue. Praesent convallis felis arcu. Curabitur faucibus tortor eget tincidunt tempus. In hac habitasse platea dictumst. Sed in vestibulum ipsum, quis maximus leo. Vivamus cursus rhoncus nunc, ut imperdiet libero cursus eleifend. In hac habitasse platea dictumst."
              buttonLink="./"
              key={1}
            />
          )}
          {currentSlide === 2 && (
            <Item
              imgUrl={SpaceApeJazzClub}
              imgDescription="Image of 'Space Ape Jazz Club' landing page"
              title="Space Ape Jazz Club"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac purus in turpis dignissim consectetur a in odio. Vestibulum convallis lacus vel dolor rhoncus, placerat consequat sapien ullamcorper. Proin lacinia ligula quis eros consectetur elementum. Morbi arcu quam, porta quis placerat a, sagittis eget augue. Praesent convallis felis arcu. Curabitur faucibus tortor eget tincidunt tempus. In hac habitasse platea dictumst. Sed in vestibulum ipsum, quis maximus leo. Vivamus cursus rhoncus nunc, ut imperdiet libero cursus eleifend. In hac habitasse platea dictumst."
              buttonLink="./"
              key={2}
            />
          )}
          {currentSlide === 3 && (
            <Item
              imgUrl={AutoCity}
              imgDescription="Image of 'Auto City' landing page"
              title="Auto City"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac purus in turpis dignissim consectetur a in odio. Vestibulum convallis lacus vel dolor rhoncus, placerat consequat sapien ullamcorper. Proin lacinia ligula quis eros consectetur elementum. Morbi arcu quam, porta quis placerat a, sagittis eget augue. Praesent convallis felis arcu. Curabitur faucibus tortor eget tincidunt tempus. In hac habitasse platea dictumst. Sed in vestibulum ipsum, quis maximus leo. Vivamus cursus rhoncus nunc, ut imperdiet libero cursus eleifend. In hac habitasse platea dictumst."
              buttonLink="./"
              key={3}
            />
          )}
        </div>
        {/* <div className="thumbnail">
          <Thumbnail
            imgUrl={One}
            imgDescription="Thumbnail to One."
            title="One."
            key={0}
          />
          <Thumbnail
            imgUrl={Musiklagret}
            imgDescription="Thumbnail to The Sixth String"
            title="The Sixth String."
            key={3}
          />
          <Thumbnail
            imgUrl={SpaceApeJazzClub}
            imgDescription="Thumbnail to Space Ape Jazz Club"
            title="Space Ape Jazz Club."
            key={1}
          />
          <Thumbnail
            imgUrl={AutoCity}
            imgDescription="Thumbnail to Auto City"
            title="Auto City."
            key={2}
          />
        </div> */}
        <div className="arrows">
          <button className="prev-button">
            <HiChevronLeft />
          </button>
          <button className="next-button">
            <HiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
