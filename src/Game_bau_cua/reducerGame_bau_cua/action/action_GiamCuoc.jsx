import { GIAM_CUOC } from "../constant/constant_GiamCuoc";

export const action_GiamCuoc = (id, diemCuoc) => {
  return {
    type: GIAM_CUOC,
    payload: { id, diemCuoc },
  };
};
