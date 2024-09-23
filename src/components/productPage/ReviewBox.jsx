import React from "react";
import { starFilled, starNotFilled } from "../../assets/icons";

function ReviewBox() {
  return (
    <div className="review-container py-4 mx-auto ">
      <h3 className="fs-1-to-1-125 fw-semibold">Name of reviewer</h3>
      <div className="star-container">
        <img src={starFilled} alt="" />
        <img src={starFilled} alt="" />
        <img src={starFilled} alt="" />
        <img src={starFilled} alt="" />
        <img src={starNotFilled} alt="" />
      </div>
      <p className="fs-1-to-1-125">Vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos</p>
    </div>
  );
}

export default ReviewBox;
