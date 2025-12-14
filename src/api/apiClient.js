const API_BASE_URL = "https://dummyjson.com/products";

const apiRequest = async ({
  url,
  method = "GET",
  body = null,
  headers = {},
  signal = null,
}) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    signal,
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      const errorData = await response.json().catch((e) => {});
      throw new Error(errorData.message || "Request failed");
    }
    const data = await response.json();
    return { data, status: response.status, error: null };
  } catch (error) {
    return { data: null, status: null, error };
  }
};

export default apiRequest;
