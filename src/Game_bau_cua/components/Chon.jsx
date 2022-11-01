import React from "react";
import { useSelector } from "react-redux";
import Chon_xuc_xac from "./Chon_xuc_xac";

export default function Chon() {
  const { chon } = useSelector((state) => state.reducerGame_bau_cua);

  let renderXucXac = () => {
    return chon.map((xuc_xac, index) => {
      return <Chon_xuc_xac key={index} xuc_xac={xuc_xac} />;
    });
  };

  return (
    <div id="chon" className="grid grid-cols-3 gap-7">
      {renderXucXac()}
    </div>
  );
}
