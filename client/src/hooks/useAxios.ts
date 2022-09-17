import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  type: string;
  url: string;
}

const useAxios = (type: string, url: string) => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (type === "get") {
      get();
    }
    if (type === "post") {
    }

    if (type === "delete") {
    }

    if (type === "patch") {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const get = async () => {
    const res = await axios.get(url);
    setValue(res.data);
  };

  return value;
};

export default useAxios;
