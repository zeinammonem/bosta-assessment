import { useState, useEffect } from "react";

function useSearch(query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const BASE_URL = "https://tracking.bosta.co/shipments/track/:trackingNumber";

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`${BASE_URL}${query}`);

        if (!res.ok) {
          throw new Error("something went wrong with fetching data");
        }

        const data = await res.json();
        if (data.response === "False") {
          throw new Error("data not found");
        }

        setData(data);
        setError("");
      } catch (error) {
        setError(error.message);
        if (error.name === "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return { data, loading, error };
}

export default useSearch;
