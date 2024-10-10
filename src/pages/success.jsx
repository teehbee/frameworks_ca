import { Link } from "react-router-dom";
import successImage from "/src/assets/img/success-check.png";

function Success() {
  return (
    <main>
      <div className="container text-center py-5">
        <h1 className="fw-bold fs-1-25-to-2rem">Thank you for your purchase!</h1>
        <p className="mw-300px mx-auto fs-0-948rem pt-3 pt-lg-4">You will receive your purchase within 1-3 days</p>
        <img className="pt-3 pt-lg-4" src={successImage} alt="Image with okay symbol showing that your purchase was complete" />
        <div>
          <Link to="/">
            <button className="green-button mt-4 mt-lg-5 fs-0-875-to-1-25-rem">Back to store</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Success;
