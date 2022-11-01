import React from "react";
import { useDispatch } from "react-redux";
import { action_GiamCuoc } from "../reducerGame_bau_cua/action/action_GiamCuoc";
import { action_TangCuoc } from "../reducerGame_bau_cua/action/action_TangCuoc";

export default function Chon_xuc_xac(props) {
  let { id, hinhAnh, tongDiemCuoc } = props.xuc_xac;

  const dispatch = useDispatch();

  const handleGiamCuoc = (id, diemCuoc) => {
    dispatch(action_GiamCuoc(id, diemCuoc));
  };

  const handleTangCuoc = (id, diemCuoc) => {
    dispatch(action_TangCuoc(id, diemCuoc));
  };

  return (
    <div>
      <img src={hinhAnh} style={{ height: "8rem" }} />
      <div className="mt-2 flex justify-between items-center">
        <button
          onClick={() => {
            handleGiamCuoc(id, 100);
          }}
          className="px-1 rounded-lg bg-green-500 text-gray-100 text-2xl"
        >
          <i className="fa fa-minus"></i>
        </button>
        <span>{tongDiemCuoc}</span>
        <button
          onClick={() => {
            handleTangCuoc(id, 100);
          }}
          className="px-1 rounded-lg bg-green-500 text-gray-100 text-2xl"
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
}
