import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { action_ChoiLai } from "../reducerGame_bau_cua/action/action_ChoiLai";

export default function DiemTong() {
  const { diemTong } = useSelector((state) => state.reducerGame_bau_cua);

  const dispatch = useDispatch();

  const handleChoiLai = () => {
    dispatch(action_ChoiLai());
  };

  return (
    <div className="py-5">
      <h1 className="text-6xl text-red-500 mb-7">Bầu cua vui vẻ !!</h1>
      <span className="text-xl bg-red-500 p-4 rounded-xl">
        Điểm của bạn:
        <span className="text-yellow-400 text-3xl ml-1">{diemTong}$</span>
      </span>
      <button
        onClick={() => {
          handleChoiLai();
        }}
        className="absolute top-5 right-5 px-8 py-3 font-semibold border rounded-xl border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white duration-300"
      >
        Chơi lại
      </button>
    </div>
  );
}
