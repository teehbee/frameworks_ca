import { starFilled, starNotFilled } from "../../assets/icons";

function ReviewBox({ reviews }) {
  return (
    <div className="review-container py-4 mx-auto">
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <h3 className="fs-1-to-1-125">{review.username}</h3>
          <div className="star-container pb-2">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={i < review.rating ? starFilled : starNotFilled} alt="rating-symbol" />
            ))}
          </div>
          <p className="fs-1-to-1-125">{review.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewBox;
