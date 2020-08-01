import * as types from "./types";

export function addTable(table) {
  return {
    type: types.ADD_TABLE,
    payload: table,
  };
}

export function deleteTable(tableIndex) {
  return {
    type: types.DELETE_TABLE,
    payload: tableIndex,
  };
}

export function updateTable(table, tableIndex) {
  return {
    type: types.UPDATE_TABLE,
    table: table,
    tableIndex: tableIndex,
  };
}
