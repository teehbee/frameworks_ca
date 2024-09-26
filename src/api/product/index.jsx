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
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        const json = await response.json();

        setData(json.data);
      } catch (error) {
        console.log(error);
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
