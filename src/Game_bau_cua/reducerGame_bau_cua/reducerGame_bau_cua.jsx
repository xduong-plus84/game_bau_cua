//

import { GIAM_CUOC } from "./constant/constant_GiamCuoc";
import { TANG_CUOC } from "./constant/constant_TangCuoc";
import { XOC_DIA } from "./constant/constant_XocDia";
import { CHOI_LAI } from "./constant/constent_ChoiLai";

let initialState = {
  diemTong: 1000,
  chon: [
    { id: "bau", hinhAnh: "./img/game_bau_cua/bau.png", tongDiemCuoc: 0 },
    { id: "ca", hinhAnh: "./img/game_bau_cua/ca.png", tongDiemCuoc: 0 },
    { id: "cua", hinhAnh: "./img/game_bau_cua/cua.png", tongDiemCuoc: 0 },
    { id: "ga", hinhAnh: "./img/game_bau_cua/ga.png", tongDiemCuoc: 0 },
    { id: "nai", hinhAnh: "./img/game_bau_cua/nai.png", tongDiemCuoc: 0 },
    { id: "tom", hinhAnh: "./img/game_bau_cua/tom.png", tongDiemCuoc: 0 },
  ],
  dia: [
    { id: "bau", hinhAnh: "./img/game_bau_cua/bau.png" },
    { id: "ca", hinhAnh: "./img/game_bau_cua/ca.png" },
    { id: "cua", hinhAnh: "./img/game_bau_cua/cua.png" },
  ],
};

export let reducerGame_bau_cua = (state = initialState, action) => {
  switch (action.type) {
    case GIAM_CUOC: {
      let { id, diemCuoc } = action.payload;

      let chonUpdate = [...state.chon];

      chonUpdate.forEach((item) => {
        if (item.id === id) {
          item.tongDiemCuoc - diemCuoc >= 0 &&
            (state.diemTong += diemCuoc) &&
            (item.tongDiemCuoc -= diemCuoc);
        }
      });

      return { ...state, chon: chonUpdate };
    }
    case TANG_CUOC: {
      let { id, diemCuoc } = action.payload;

      let chonUpdate = [...state.chon];

      chonUpdate.forEach((item) => {
        if (item.id === id) {
          state.diemTong - diemCuoc >= 0 &&
            (item.tongDiemCuoc += diemCuoc) &&
            (state.diemTong -= diemCuoc);
        }
      });

      return { ...state, chon: chonUpdate };
    }
    case XOC_DIA: {
      // tao ket qua ngau nhien
      const arrXucXacDia = [];
      for (let i = 0; i <= 2; i++) {
        let x = Math.floor(Math.random() * 6);
        arrXucXacDia.push(state.chon[x]);
      }
      // so sanh ket qua chon voi mang ngau nhien
      arrXucXacDia.forEach((item) => {
        let { id } = item;
        state.chon.forEach((element) => {
          element.id === id && (state.diemTong += element.tongDiemCuoc);
        });
      });

      // hoan tien
      state.chon.forEach((item) => {
        let { id, tongDiemCuoc } = item;
        arrXucXacDia.forEach((element) => {
          element.id === id && (state.diemTong += tongDiemCuoc);
        });
      });

      // reset turn game
      let chonUpdate = [...state.chon];
      chonUpdate.map((item) => (item.tongDiemCuoc = 0));

      return { ...state, chon: chonUpdate, dia: arrXucXacDia };
    }
    case CHOI_LAI: {
      let chonUpdate = [...state.chon];
      chonUpdate.map((item) => (item.tongDiemCuoc = 0));

      return { ...state, diemTong: 1000, chon: chonUpdate };
    }
    default: {
      return { ...state };
    }
  }
};
