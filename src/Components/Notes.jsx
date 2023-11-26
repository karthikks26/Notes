import React, { useContext } from "react";
import { c } from "./MyContext";
import { Edit, Trash2 } from "lucide-react";
import { useSnackbar } from "notistack";

const Notes = ({ open }) => {
  const {
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
  } = useContext(c);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handledelete = (id) => {
    const updated = store.filter((item) => item.id !== id);
    enqueueSnackbar("deleted Successfully!", { variant: "success" });
    console.log("llll", updated);
    setStore(updated);
  };
  const handleEdit = (id) => {
    open();
    setEditItemId(id);
    const edited = store.find((item) => item.id == id);
    console.log("e", edited);
    setTitle(edited.title);
    setNote(edited?.Note);

    setEditItemId(id);
    setEditbtn(true);
    console.log("kkk", editbtn);
    console.log("mmmm", editbtn);

    console.log(edited);
  };
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {store?.map((item) => (
          <div
            className="bg-[#FFF3F0] w-full max-w-[300px] min-h-[100px] shadow-xl rounded-lg relative mt-3 px-2"
            key={item?.id}
          >
            {console.log(item)}
            <p className="text-center font-bold text-xl break-words mx-7 text-[#CC59D2]">
              {item?.title}
            </p>
            <p className="text-center break-words">{item?.Note}</p>
            <div>
              <Edit
                className="cursor-pointer absolute top-1 left-2 "
                onClick={() => handleEdit(item?.id)}
              />
            </div>
            <Trash2
              className="absolute top-1 right-2"
              onClick={() => handledelete(item?.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Notes;
