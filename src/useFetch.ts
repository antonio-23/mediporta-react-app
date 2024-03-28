import { useEffect } from "react";
import { useStore } from "./store/store";

export function useFetch() {
  const { setIsLoading, setIsError, setData } = useStore();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setIsError("");

        const response = await fetch(
          "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow",
          { signal: controller.signal }
        );

        if (!response.ok)
          throw new Error("Something went wrong with fetching the data.");

        const responseData = await response.json();
        setData(responseData.items);
        setIsError("");
      } catch (error) {
        console.error(error);
        if (error.name !== "AbortError") setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return function () {
      controller.abort();
    };
  }, [setData, setIsError, setIsLoading]);
}
