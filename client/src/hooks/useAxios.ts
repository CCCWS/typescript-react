import { useState, useCallback } from "react";
import axios from "axios";

interface Data {
  completed?: boolean;
  id?: number;
  title?: string;
  userId?: number;
}

interface Props {
  type: string;
  url: string;
  id?: number;
}

const useAxios = () => {
  const [todoEdit, setTodoEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<{ id: number; text: string | any }[]>([]);

  const get = useCallback(async (url: string): Promise<void> => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  const add = useCallback(async (url: string, text: string): Promise<void> => {
    try {
      const res = await axios.post(url, { text: text });
      setData(res.data);
    } catch (err) {
      console.log("error");
    }
  }, []);

  const del = useCallback(async (url: string, id: number): Promise<void> => {
    try {
      const res = await axios.delete(`${url}/${id}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const edit = useCallback(
    async (
      url: string,
      id: number,
      editText: string,
      nowText: string
    ): Promise<void> => {
      if (todoEdit === true) {
        if (editText !== nowText) {
          const res = await axios.patch(`${url}/${id}`, { text: editText });
          setData(res.data);
        }
      }
      setTodoEdit(!todoEdit);
    },
    [todoEdit]
  );

  return { data, loading, todoEdit, get, add, del, edit };
};

export default useAxios;
