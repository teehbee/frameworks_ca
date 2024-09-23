import React from "react";
import { ItemCard } from "../components";

function Home() {
  return (
    <div>
      <main>
        <div className="container text-center pt-5">
          <div className="text-start">
            <p className="remove-search-queries ms-auto link-text fs-0-75rem-to-1-rem text-decoration-none pt-2 d-none">Remove search items</p>
          </div>
          <div className="row">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>

          <p className="error-text text-danger fw-medium pt-3 d-none">There was a problem filling the store. Please try again later. </p>
          <div className="loader mx-auto mt-5 d-none"></div>
          <p className="home-load-items link-text fs-0-75rem-to-1-rem text-decoration-none pt-2 d-none">Load more Støff.</p>
        </div>
      </main>
    </div>
  );
}

export default Home;
