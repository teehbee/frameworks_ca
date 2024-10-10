import { useProduct } from "../api/product";
import ProductInfo from "../components/productPage/ProductInfo";
import ReviewBox from "../components/productPage/ReviewBox";

function Product() {
  const { data, isLoading, isError } = useProduct();

  if (isLoading) {
    return <div className="loader mx-auto my-5"></div>;
  }

  if (isError) {
    return (
      <div className="container text-center error-text text-danger fw-medium pb-5">
        <p className="error-text text-danger fw-medium fs-1-to-1-563">We could not find your product, please try again later</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container text-center error-text text-danger fw-medium pb-5">
        <p className="error-text text-danger fw-medium fs-1-to-1-563">We could not find your product, please try again later</p>
      </div>
    );
  }

  return (
    <>
      <div className="container text-center pb-5">
        <ProductInfo product={data} />
        <div id="reviews" className="reviews pt-4 pt-md-5">
          <h2 className="fs-1-5-rem-to-2-rem">User reviews</h2>
          {data.reviews && data.reviews.length > 0 ? <ReviewBox reviews={data.reviews} /> : <div className="fs-1-to-1-563 pt-3">No reviews yet</div>}
        </div>
      </div>
    </>
  );
}

export default Product;
