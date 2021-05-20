import {
  GET_MISSIONS,
  GET_MISSIONS_ERROR,
  START_LOADING,
  STOP_LOADING,
  SET_BACKDROP,
  SET_PAGE,
SET_LAUNCH,
  GET_MISSIONS_CLEAR,
} from "../types.js";
const missionReducer = (state, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return { ...state, missions: action.payload};
    case GET_MISSIONS_ERROR:
      return { ...state, error: action.payload };
    case START_LOADING:
      return { ...state, missionLoading: true };
    case STOP_LOADING:
      return { ...state, missionLoading: false };
    case SET_BACKDROP:
      return {
        ...state,
        backdrop: state.backdrop ? false : true,
        index: action.payload,
      };
   
    case GET_MISSIONS_CLEAR:
      return { ...state, missions: null };
    case SET_PAGE:
      return { ...state, page: action.payload };
      case SET_LAUNCH:
        return { ...state, launch: action.payload };
    default:
      return state;
  }
};
export default missionReducer;
