import { useEffect, useState } from 'react';
import { setFetch } from '../utils/utils';

const useFetch = (apiUrl, filter) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (apiUrl) {
      setFetch(apiUrl, filter).then(results => setResult(results))
    }
  }, [apiUrl]);

  return [result];
};

export default useFetch;
