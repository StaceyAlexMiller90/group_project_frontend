const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INVENTORY_BY_ID':
      return [...state, ...action.payload];
      
    default:
      return state;
  }
}