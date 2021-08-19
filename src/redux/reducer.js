import * as actionTypes from "./ActionTypes";

const initialState = {
  title: "",
  paragrph: "",
  subtitle: "",
  image: "",
  code: "",
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case actionTypes.ADD_PARAGRAPH:
      return {
        ...state,
        title: action.payload,
      };
    case actionTypes.ADD_SUBTITLE:
      return {
        ...state,
        title: action.payload,
      };
    case actionTypes.ADD_IMAGE:
      return {
        ...state,
        title: action.payload,
      };
    case actionTypes.ADD_CODE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
