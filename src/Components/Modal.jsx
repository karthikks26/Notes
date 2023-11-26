import { X } from "lucide-react";
import React, { useContext, useId, useState } from "react";
import { c } from "./MyContext";
import { useSnackbar } from "notistack";

const Modal = ({ close, open }) => {
  const {
    title,
    setTitle,
    Note,
    setNote,
    store,
    setStore,
    editItemId,
    setEditItemId,
    editbtn,
    setEditbtn,
  } = useContext(c);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  let edito = false;
  const uniqueid = useId();

  const handlesave = () => {
    const obj = {
      id: uniqueid,
      title,
      Note,
      date: new Date().toDateString(),
    };

    if (!title || !Note) {
      enqueueSnackbar("Fill the required fields", { variant: "warning" });
    } else if (editbtn && title && Note) {
      const edit = store.map((elem) => {
        if (
          elem.id == editItemId &&
          (elem.title !== title || elem.Note !== Note)
        ) {
          edito = true;
          return { ...elem, title, Note };
        }

        return elem;
      });

      console.log("surgery", edit);
      setStore(edit);
      if (edito) {
        enqueueSnackbar("Edited successfully!", { variant: "success" });
        close();
      } else {
        enqueueSnackbar(" First Edit Before saving!", { variant: "warning" });
        return;
      }

      setEditbtn(false);
    } else {
      setStore([...store, obj]);

      close();
      enqueueSnackbar("Created Successfully!", { variant: "success" });
      console.log();
    }
  };

  return (
    <>
      <div className="bg-black bg-opacity-60 fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
        <div className="bg-white w-[400px] h-[400px] rounded-md relative drop-shadow-md  text-center  ">
          <X className="absolute right-2 top-1" onClick={close} />
          <h1 className="text-center text-2xl my-2 font-semibold text-green-400 italic">
            Fill details
          </h1>
          <label className=" font-mono text-xl ">Title</label>
          <br />
          <input
            type="text"
            className="  border-2 border-blue-400 w-[65%] h-[8%]  focus:border-orange-300 my-2 "
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label className=" font-mono text-xl ">Note</label>
          <br />
          <textarea
            className="  border-2 border-blue-400 w-[65%]  focus:border-orange-300 my-2"
            value={Note}
            required
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <br></br>
          <button
            className="bg-indigo-500 font-bold text-white w-[65%] py-1 px-2 rounded-md drop-shadow-md my-2"
            onClick={handlesave}
          >
            save
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
