import { useLocation } from "react-router-dom";

function useIsRootPath() {
  const location = useLocation();
  return location.pathname === "/";
}

export default useIsRootPath;
