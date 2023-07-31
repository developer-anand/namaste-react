import { IMAGE_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "f0f0f0",
      }}
    >
      <img className="res-card-img" src={IMAGE_URL + cloudinaryImageId} />

      <h4>{name}</h4>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRating}</h6>
      <h6>{costForTwo}</h6>
    </div>
  );
};

export default RestaurantCard;
