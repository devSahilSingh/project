import {
  SPACE_DATA_FAILURE,
  SPACE_DATA_REQUEST,
  SPACE_DATA_SUCCESS,
} from "../action/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SPACE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SPACE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case SPACE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
