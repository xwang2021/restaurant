const initialState = {
  tables: [
    {
      name: "A1",
      capacity: 1,
      width: 1,
      length: 1,
      menuItems: [
        {
          dish: "R1. Original Crossing Bridge Rice Noodles",
          price: 14.49,
          quantity: 1,
        },
        { dish: "S2. Spicy and Sour Cucumber", price: 5.5, quantity: 1 },
        {
          dish: "S7. Sweet Potato Fries with Plum Seasoning",
          price: 4.5,
          quantity: 2,
        },
        {
          dish: "R5. Freshly Squeezed Lemon Black Tea",
          price: 4.5,
          quantity: 1,
        },
      ],
    },
    {
      name: "A2",
      capacity: 2,
      width: 1,
      length: 2,
      menuItems: [
        {
          dish: "R9. Green Pepper Fish with Rice",
          price: 19.49,
          quantity: 3,
        },
        { dish: "S4. Popcorn Chicken, price: ", price: 6.5, quantity: 1 },
        {
          dish: "S5. Chilled Mango Sago Cream with Pomelo",
          price: 7.6,
          quantity: 2,
        },
        { dish: "R1. Oreo Pearl Milk Tea", price: 4.5, quantity: 1 },
      ],
    },
    {
      name: "A3",
      capacity: 5,
      width: 2,
      length: 2,
      menuItems: [
        {
          dish: "R6. Beef Slice with Kimchi Rice Noodles",
          price: 16.49,
          quantity: 1,
        },
        { dish: "S2. Crispy Chicken Wings", price: 6.0, quantity: 1 },
        {
          dish: "S8. Coconut Purple Rice Tapioca Soup",
          price: 4.5,
          quantity: 1,
        },
        { dish: "R9. Passion Fruit and Mango", price: 4.25, quantity: 4 },
      ],
    },
  ],
};

const tablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TABLE":
      return {
        ...state,
        tables: [...state.tables, action.payload],
      };
    case "DELETE_TABLE":
      const newstate = {
        ...state,
        tables: state.tables.filter((table, index) => index !== action.payload),
      };
      return newstate;
    case "UPDATE_TABLE":
      return {
        ...state,
        tables: state.tables.map((table, index) => {
          if (index === action.tableIndex) {
            return action.table;
          }
          return table;
        }),
      };

    default:
      return state;
  }
};

export default tablesReducer;
