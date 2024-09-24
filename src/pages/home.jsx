import React, { useState } from "react";
import { ItemCard } from "../components";

function Home() {
  // const [visibleCount, setVisibleCount] = useState(18);

  // function loadMore() {
  //   setVisibleCount((prevCount) => prevCount + 18);
  // }
  return (
    <div>
      <main>
        <div className="container text-center pt-5">
          <div className="text-start">
            <p className="remove-search-queries ms-auto link-text fs-0-75rem-to-1-rem text-decoration-none pt-2 d-none">Remove search items</p>
          </div>
          <div className="row">
            <ItemCard />
          </div>
          <p className="home-load-items link-text fs-0-75rem-to-1-rem text-decoration-none py-4 ">Load more Støff.</p>
        </div>
      </main>
    </div>
  );
}

export default Home;
