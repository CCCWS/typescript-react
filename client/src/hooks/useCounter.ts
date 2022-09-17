import { useEffect, useState } from "react";

const useCounter = (type: string) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const countFn = () => {
      if (type === "+") {
        return setCount((prev) => prev + 1);
      }

      if (type === "-") {
        return setCount((prev) => prev - 1);
      }
    };

    const interval = setInterval(() => countFn(), 1000);
    return () => clearInterval(interval);
  }, [type]);

  return [count];
};

export default useCounter;
