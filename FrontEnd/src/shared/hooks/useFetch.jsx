import { useState, useEffect } from 'react'

export const useFetch = (url, setData) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getData()
  }, [])



  return { loading, error }
}
