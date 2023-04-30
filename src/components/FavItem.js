import React from "react";
import { useDispatch } from "react-redux";
import { removeFav } from "../actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notificationRemoved = () => {
  toast("Favorilerden çıkarıldı!");
};

function FavItem({ title, id }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow hover:shadow-lg p-3 pl-5 flex items-center group transition-all">
      <div className="flex-1 pr-4">{title.setup}</div>
      <div className="flex-1 pr-4">{title.punchline}</div>

      <button
        onClick={() => {
          dispatch(removeFav(id));
          notificationRemoved();
        }}
        className="transition-all px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
      <ToastContainer/>
    </div>
  );
}

export default FavItem;