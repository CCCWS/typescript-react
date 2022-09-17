import useCounter from "../../hooks/useCounter";

const Timer = () => {
  const [count1] = useCounter("+");
  const [count2] = useCounter("-");

  return (
    <div>
      <div>{count1}</div>
      <div>{count2}</div>
    </div>
  );
};

export default Timer;
