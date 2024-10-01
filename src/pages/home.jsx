import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ItemCard } from "../components";
import useScrollToTop from "../components/utils/useScrollToTop";
import CookieConsentPopup from "../components/utils/CookieConsentPopup";

function Home() {
  useScrollToTop();
  const { data, isLoading, isError } = useOutletContext();
  const [visibleCount, setVisibleCount] = useState(18);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 18);
  };

  const visibleData = data?.slice(0, visibleCount);

  if (isLoading) {
    return <div className="loader mx-auto my-5"></div>;
  }

  if (isError) {
    return <p className="error-text text-danger fw-medium pt-3">There was a problem filling the store. Please try again later.</p>;
  }

  return (
    <>
      <main>
        <div className="container text-center pt-5">
          <div className="row">
            <ItemCard data={visibleData} />
          </div>
          {visibleCount < data.length && (
            <p onClick={handleLoadMore} className="home-load-items link-text fs-0-75rem-to-1-rem text-decoration-none py-4 ">
              Load more Støff.
            </p>
          )}
        </div>
        <CookieConsentPopup />
      </main>
    </>
  );
}

export default Home;
