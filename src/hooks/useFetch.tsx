// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function useFetch(url: string) {
//    const [data, setData] = useState<null | Response>(null);
//   const [error, setError] = useState<Error | null>();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async function () {
//       try {
//         setLoading(true);
//         const response = await axios.get(url);
//         setData(response.data.results);
//       } catch (err: any) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   },[]);

//   return { data, error, loading };
// }

import { useState, useEffect } from "react";

export type TApiResponse = {
  data: any;
  error: any;
  loading: Boolean;
};

export const useFetch = (url: string): TApiResponse => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();

      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return { data, error, loading };
};
