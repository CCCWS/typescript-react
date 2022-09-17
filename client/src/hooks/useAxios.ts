import { useState, useEffect } from "react";
import axios from "axios";

interface Data {
  completed?: boolean;
  id?: number;
  title?: string;
  userId?: number;
}

const useAxios = (url: string, id: boolean) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();

  const get = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setData({ id: null, title: "error" });
      setLoading(false);
    }
  };

  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return [data, loading];
};

export default useAxios;
