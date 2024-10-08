import { Breadcrumb } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const isProductPage = location.pathname.startsWith("/product");

  return (
    <Breadcrumb className="bread-crumbs ps-2 ps-lg-5 pt-lg-3 pb-5 fs-0-75rem-to-1-rem main-font-colour">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
        Home
      </Breadcrumb.Item>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        if (isProductPage && index > 0) {
          return null;
        }
        return (
          <Breadcrumb.Item key={to} linkAs={Link} linkProps={{ to }}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
