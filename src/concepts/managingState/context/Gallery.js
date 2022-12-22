import React, { useContext, useState } from "react";
import { ImageSizeContext } from "./Context";
import { places } from "./data";
import { getImageUrl } from "./utils";

export const Gallery = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageSizeContext.Provider value={imageSize}>
      <input
        type="checkbox"
        checked={isLarge}
        onChange={(e) => setIsLarge(e.target.checked)}
      ></input>
      <span>Use large images</span>

      <hr />
      <List />
    </ImageSizeContext.Provider>
  );
};
const List = () => {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
};

const Place = ({ place }) => {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {":" + place.description}
      </p>
    </>
  );
};

const PlaceImage = ({ place }) => {
  const imageSize = useContext(ImageSizeContext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    ></img>
  );
};
