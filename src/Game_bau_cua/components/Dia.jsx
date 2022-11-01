import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { action_XocDia } from "../reducerGame_bau_cua/action/action_XocDia";
import Dia_xuc_xac from "./Dia_xuc_xac";

export default function Dia() {
  const dia = useSelector((state) => state.reducerGame_bau_cua.dia);

  const dispatch = useDispatch();

  const handleXocDia = () => {
    dispatch(action_XocDia());
  };

  return (
    <div id="dia">
      <div className="grid grid-cols-2 gap-4 bg-white p-12 rounded-full drop-shadow-2xl relative">
        <div className="...">
          <Dia_xuc_xac xuc_xac={dia[0]} />
        </div>
        <div className="...">
          <Dia_xuc_xac xuc_xac={dia[1]} />
        </div>
        <div className="col-span-2 mx-auto">
          <Dia_xuc_xac xuc_xac={dia[2]} />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="h-20 w-20 rounded-full shadow-md"></div>
        </div>
      </div>

      <button
        onClick={() => {
          handleXocDia();
        }}
      >
        <img src="./img/game_bau_cua/soc.png" className="mt-5 h-12" />
      </button>
    </div>
  );
}
