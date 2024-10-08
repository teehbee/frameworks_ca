import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useProduct() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${id}`);
        const json = await response.json();

        setData(json.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [id]);
  return { data, isLoading, isError };
}
export { useProduct };
