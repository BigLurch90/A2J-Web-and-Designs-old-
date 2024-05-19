import React from "react";

interface Props {
  imgUrl: string;
  imgDescription: string;
  title: string;
}

const Thumbnail = ({ imgUrl, imgDescription, title }: Props) => {
  return (
    <div>
      <div className="item">
        <img src={imgUrl} alt={imgDescription} />
        <div className="content">
          <h6 className="title">{title}</h6>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
