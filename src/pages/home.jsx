import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ItemCard } from "../components";
import useScrollToTop from "../components/utils/useScrollToTop";
import CookieConsentPopup from "../components/utils/CookieConsentPopup";

function Home() {
  useScrollToTop();
  const { data, isLoading, isError } = useOutletContext();
  const [visibleCount, setVisibleCount] = useState(() => {
    const savedCount = localStorage.getItem("visibleCount");
    return savedCount ? parseInt(savedCount, 10) : 18;
  });

  useEffect(() => {
    localStorage.setItem("visibleCount", visibleCount);
  }, [visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 18);
  };

  const visibleData = data?.slice(0, visibleCount);

  if (isLoading) {
    return (
      <div className="frontpage-main-container">
        <div className="container text-center pt-5">
          <div className="loader mx-auto my-5"></div>;
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="frontpage-main-container">
        <div className="container text-center pt-5">
          <div className="loader mx-auto my-5"></div>;<p className="error-text text-danger fw-medium pt-3">There was a problem filling the store. Please try again later.</p>;
        </div>
      </div>
    );
  }

  return (
    <div className="frontpage-main-container">
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
    </div>
  );
}

export default Home;
