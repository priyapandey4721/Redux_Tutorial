import { BUY_ICECREAMS } from "./IceCreamTypes";

const initialState = {
  numOfIceCreams: 20,
};
const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAMS:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
export default IceCreamReducer;
