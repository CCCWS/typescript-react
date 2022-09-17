import { useState } from "react";

const useInput = (text: string) => {
  const [data, setData] = useState(text);
  const [test, setTest] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const onAlert = () => {
    alert(data);
    setData("");
  };

  const onSubmit = (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    e.preventDefault();
    setTest(!test);
  };

  return { data, onChange, onAlert, onSubmit, test };
};

export default useInput;
