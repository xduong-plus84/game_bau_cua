import { TANG_CUOC } from "../constant/constant_TangCuoc";

export const action_TangCuoc = (id, diemCuoc) => {
  return {
    type: TANG_CUOC,
    payload: { id, diemCuoc },
  };
};
