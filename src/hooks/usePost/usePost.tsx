import axios from 'axios';
import {useState} from 'react';
import {LoginPostValues} from '../../pages/Login';

const usePost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  type PostFn = (url: string, apiData: LoginPostValues) => Promise<void>;

  const post: PostFn = async (url, apiData) => {
    data && setData(null);
    error && setError(null);
    loading && setLoading(false);
    try {
      setLoading(true);
      const responseData = await axios.post(url, apiData);
      setLoading(false);
      setData(responseData.data);
      // console.log(responseData);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {loading, data, error, post};
};

export default usePost;
