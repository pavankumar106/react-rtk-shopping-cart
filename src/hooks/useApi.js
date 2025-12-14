import { useCallback } from "react";
import { useState } from "react";
import apiRequest from "../api/apiClient";
import { useEffect } from "react";

export const useApi = ({
  url,
  method = "GET",
  body = null,
  headers = {},
  auto = true,
}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    const { data, error } = await apiRequest({
      url,
      method,
      body,
      headers,
      signal: controller.signal,
    });
    error ? setError(error) : setData(data);
    setLoading(false);
    return () => controller.abort();
  }, [url, method, body, headers]);

  useEffect(() => {
    if (auto) {
      fetchData();
    }
  }, [auto, fetchData]);
  return { data, error, loading, refetch: fetchData };
};
