import React from "react";

function Home() {
  return (
    <div>
      <main>
        <div className="container text-center pt-5">
          <p className="error-text text-danger fw-medium pt-3 d-none">There was a problem filling the store. Please try again later. </p>
          <div className="loader mx-auto mt-5"></div>
        </div>
      </main>
    </div>
  );
}

export default Home;
