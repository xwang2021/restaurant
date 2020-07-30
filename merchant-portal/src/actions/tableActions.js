import * as types from "./types";

export function addTable(table) {
  return {
    type: types.ADD_TABLE,
    payload: table,
  };
}
