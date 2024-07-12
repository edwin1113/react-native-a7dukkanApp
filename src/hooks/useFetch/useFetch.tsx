import axios from 'axios';
import {useState, useEffect} from 'react';

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  type FetchFn = () => Promise<void>;

  const fetchData: FetchFn = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      // console.log(responseData);
      setLoading(false);
    } catch (error) {
      // console.log(error.message);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, data, error};
};

export default useFetch;
