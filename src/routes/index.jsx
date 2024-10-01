import { createBrowserRouter } from "react-router-dom";
import { Home, Product, Contact, Cart, Success, Privacy } from "../pages";
import { MainLayout } from "../layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
    ],
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

export { router };
