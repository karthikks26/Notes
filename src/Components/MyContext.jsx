import React, { createContext, useEffect, useState } from "react";
export const c = createContext();
const MyContext = ({ children }) => {
  const getlocalstorage = () => {
    let storedData = localStorage.getItem("myContextData");
    if (storedData) {
      return JSON.parse(localStorage.getItem("myContextData"));
    } else {
      return [];
    }
  };
  const [title, setTitle] = useState("");
  const [Note, setNote] = useState("");
  const [store, setStore] = useState(getlocalstorage());
  const [editItemId, setEditItemId] = useState(null);
  const [editbtn, setEditbtn] = useState(false);

  useEffect(() => {
    localStorage.setItem("myContextData", JSON.stringify(store));
  }, [store]);

  let date;
  const contextValue = {
    title,
    setTitle,
    Note,
    setNote,
    store,
    setStore,
    date,
    editItemId,
    setEditItemId,
    editbtn,
    setEditbtn,
  };
  console.log(store);

  return <c.Provider value={contextValue}>{children}</c.Provider>;
};

export default MyContext;
