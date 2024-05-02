import { useState, useEffect } from "react";
import axios, { Method } from "axios";

// Define the type for the fetched data
type Data = any; // Replace 'any' with the actual type of your data if known

const useFetch = (
  url: string,
  method: Method = "GET",
  postData: any = null
) => {
  const [data, setData] = useState<Data | null>(null); // Add type annotation for data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null); // You can refine the type for error if needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        switch (method.toUpperCase()) {
          case "GET":
            response = await axios.get<Data>(url);
            break;
          case "POST":
            response = await axios.post<Data>(url, postData, {
              headers: {
                Authorization: `"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYTNhOGNlMS1jNTgyLTQ4ZDctYTg2YS01MDNhZjMwODczZjEiLCJlbWFpbCI6ImZvcEBnbWFpbC5jb20iLCJpYXQiOjE3MTQzNzU0OTgsImV4cCI6MTcxNDQ2MTg5OH0.e94gPamsCWrf0jRBtCHJwft0a72BgqoxlEKvXInvNM8"`, // Replace accessToken with your actual token
              },
            });
            break;
          case "PUT":
            response = await axios.put<Data>(url, postData);
            break;
          case "DELETE":
            response = await axios.delete<Data>(url);
            break;
          default:
            throw new Error(`Invalid method: ${method}`);
        }
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, postData]); // Fetch data when the URL, method, or postData changes

  return { data, loading, error };
};

export default useFetch;
