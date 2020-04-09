const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INVENTORY_BY_ID":
      console.log("State of byID", state);
      console.log("Action payload", action.payload);

      return action.payload;

    default:
      return state;
  }
};
