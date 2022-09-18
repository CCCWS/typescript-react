import { useState } from "react";

const useModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [contents, setContents] = useState<{
    title: string;
    message: string;
  }>({ title: "", message: "" });

  return { openModal, contents, setOpenModal, setContents };
};

export default useModal;
