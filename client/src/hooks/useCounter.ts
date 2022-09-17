import { useEffect, useState } from "react";

const useCounter = (type: string) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (type === "+") {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }

    if (type === "-") {
      const interval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [type]);

  return { count };
};

export default useCounter;
