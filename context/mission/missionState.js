import { useReducer } from "react";
import missionReducer from "./missionReducer";
import missionContext from "./missionContext";
import {
  GET_MISSIONS,
  GET_MISSIONS_ERROR,
  START_LOADING,
  STOP_LOADING,
  SET_BACKDROP,
  SET_PAGE,
  GET_MISSIONS_CLEAR,
  SET_LAUNCH
} from "../types";
import axios from "axios";
const missionState = ({ children }) => {
  const initialState = {
    missionLoading: false,
    missions: null,
    error: null,
    backdrop: false,
    index: null,
    page: 1,
   launch:1
  };

  const [state, dispatch] = useReducer(missionReducer, initialState);
  const getMissions = async (page,launch) => {
    console.log(page + " page");
    let string = `https://api.spacexdata.com/v3/launches`;
        if (launch) {
          if (launch === 1) {
            string += ``;
          }
          if (launch === 2) {
             string += `/upcoming`;
          }
          if (launch === 3) {
            string += `?launch_success=true`
          }
          if (launch === 4) {
            string += `?launch_success=false`;
          }
        }
    if (page) {
  if (
    string.substring(string.length - 1, string.length) === "g" ||
    string.substring(string.length - 1, string.length) === "s"
  ) {
    string += `?limit=12&offset=${(page - 1) * 12}`;
  } else {
    string += `&limit=12&offset=${(page - 1) * 12}`;
  }
    
    }


    console.log(string + " string");
    try {
      dispatch({ type: START_LOADING });
      const { data } = await axios.get(string);

      dispatch({ type: GET_MISSIONS, payload: data });
      dispatch({ type: STOP_LOADING });
    } catch (err) {
      dispatch({
        type: GET_MISSIONS_ERROR,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
  const setPage = (page) => {
    dispatch({ type: SET_PAGE, payload: page });
  };
  const setBackdrop = (i) => {
    dispatch({ type: SET_BACKDROP, payload: i });
  };
const clearMissions = () => {
  dispatch({ type: GET_MISSIONS_CLEAR });
};
const setLaunch=(filter)=>{
  dispatch({ type: SET_LAUNCH,payload:filter})
}
  return (
    <missionContext.Provider
      value={{
        missionLoading: state.missionLoading,
        error: state.error,
        missions: state.missions,
        backdrop: state.backdrop,
        getMissions,
        setBackdrop,
        index: state.index,
        setPage,
        page: state.page,
     setLaunch,
     launch: state.launch,
        clearMissions
      }}>
      {children}
    </missionContext.Provider>
  );
};
export default missionState;
