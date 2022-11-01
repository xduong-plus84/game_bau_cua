import { combineReducers } from "redux";
import { reducerGame_bau_cua } from "../Game_bau_cua/reducerGame_bau_cua/reducerGame_bau_cua";

export const reducerRoot = combineReducers({
  reducerGame_bau_cua,
});
