import React, { useState } from "react";
import { ItemCard } from "../components";
import useApi from "../api/products";

function Home() {
  const { data, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");
  const [visibleCount, setVisibleCount] = useState(18);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 18);
  };

  const visibleData = data.slice(0, visibleCount);

  if (isLoading) {
    return <div className="loader mx-auto my-5"></div>;
  }

  if (isError) {
    <p className="error-text text-danger fw-medium pt-3">There was a problem filling the store. Please try again later. </p>;
  }

  return (
    <div>
      <main>
        <div className="container text-center pt-5">
          <div className="text-start">
            <p className="remove-search-queries ms-auto link-text fs-0-75rem-to-1-rem text-decoration-none pt-2">Remove search items</p>
          </div>
          <div className="row">
            <ItemCard data={visibleData} />
          </div>
          {visibleCount < data.length && (
            <p onClick={handleLoadMore} className="home-load-items link-text fs-0-75rem-to-1-rem text-decoration-none py-4 ">
              Load more Støff.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
