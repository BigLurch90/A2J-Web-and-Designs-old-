import React from "react";

interface Props {
  imgUrl: string;
  imgDescription: string;
  title: string;
  description: string;
  buttonLink: string;
}

const Item = ({
  imgUrl,
  imgDescription,
  title,
  description,
  buttonLink,
}: Props) => {
  return (
    <div className="item">
      <img src={imgUrl} alt={imgDescription} />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="des">{description}</p>
        <a href={buttonLink} className="button">
          <button>See project</button>
        </a>
      </div>
    </div>
  );
};

export default Item;
