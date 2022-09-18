import { useEffect } from "react";

const useEsc = (props: any) => {
  useEffect(() => {
    const escKeyModalClose = (e: any) => {
      if (e.keyCode === 27) {
        console.log("test");
      }
    };
    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);
};

export default useEsc;
