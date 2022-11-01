import React from "react";
import Chon from "./components/Chon";
import Dia from "./components/Dia";
import DiemTong from "./components/DiemTong";
import "./Game_bau_cua.css";

export default function Game_bau_cua() {
  return (
    <div id="Game_bau_cua" className="min-h-screen text-center">
      <DiemTong />
      <div className="flex justify-around items-center my-10 h-full">
        <Chon />
        <Dia />
      </div>
    </div>
  );
}
