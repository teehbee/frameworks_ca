import { useState, useEffect } from "react";
import { Header, Footer } from "../components";
import { Breadcrumbs } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import useApi from "../api/products";

function MainLayout() {
  const location = useLocation();
  const showBreadcrumbs = location.pathname !== "/";

  const { data, isLoading, isError } = useApi(import.meta.env.VITE_API_BASE_URL);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const productSuggestions = data.map((product) => ({
        title: product.title,
        id: product.id,
      }));
      setSuggestions(productSuggestions);
    }
  }, [data]);

  return (
    <>
      <Header suggestions={suggestions} />

      <main>
        {showBreadcrumbs && <Breadcrumbs />}
        <Outlet context={{ data, isLoading, isError }} />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
