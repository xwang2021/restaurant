const initialState = {
  tables: [],
};

const tablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TABLE":
      return {
        ...state,
        tables: [...state.tables, action.payload],
      };
    default:
      return state;
  }
};

export default tablesReducer;
