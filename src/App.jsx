import { Plus } from "lucide-react";
import React, { useContext, useState } from "react";
import Modal from "./Components/Modal";
import Notes from "./Components/Notes";
import { c } from "./Components/MyContext";

const App = () => {
  const [modal, setModal] = useState(false);
  const {
    setTitle,

    setNote,
  } = useContext(c);

  return (
    <>
      <div className="flex justify-center items-center my-3  mx-2 ">
        <div className=" w-full max-w-[500px] h-[200px] shadow-2xl rounded-md flex justify-center items-center bg-slate-200  relative  ">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <i>Notes</i>
          </h1>
          <div
            className="w-14 h-14 bg-blue-700 rounded-full flex justify-center items-center absolute -bottom-2 -right-2 "
            onClick={() => (
              <div> {(setModal(true), setTitle(""), setNote(""))}</div>
            )}
          >
            <Plus className="text-white" />
          </div>
        </div>
      </div>
      <Notes open={() => setModal(true)} />
      {modal && (
        <Modal close={() => setModal(false)} open={() => setModal(true)} />
      )}
    </>
  );
};

export default App;
