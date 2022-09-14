type Test = {
  children: any;
};

const Wrapper: React.FC<Test> = ({ children }) => {
  console.log(children);
  return <div>{children}</div>;
};

export default Wrapper;
