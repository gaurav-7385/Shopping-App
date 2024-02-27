import React from "react";
import styled from "styled-components";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/Slice/CartSlice";

const Cartitem = ({ item, itemindex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed SucessFully");
  };

  return (
    <div className="p-4 border-b-2 last:border-none border-slate-700">
      <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">
        <div className="md:w-[30%] w-full flex justify-center items-center">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="md:w-[70%] w-full flex flex-col gap-5">
          <h1 className="text-xl font-[600] text-slate-700">{item.title}</h1>
          <h1 className="text-slate-700">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-[#16a34a] text-lg">{item.price}</p>
          <div
            onClick={removeFromCart}
            className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
             hover:bg-red-400 group transition-all"
          >
            <MdDeleteSweep />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;

const Cartitem1 = styled.div``;
