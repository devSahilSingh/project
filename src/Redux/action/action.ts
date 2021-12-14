import axios from "axios";
import { ISpace } from "../../Interface/space";
import {
  SPACE_DATA_FAILURE,
  SPACE_DATA_REQUEST,
  SPACE_DATA_SUCCESS,
} from "./types";

export const fetchSpaceData = () => {
  return (dispatch: any) => {
    dispatch(fetchDataRequest());
    axios
      .get("https://api.spacexdata.com/v3/launches/")
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export const fetchDataRequest = () => {
  return {
    type: SPACE_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data: ISpace) => {
  return {
    type: SPACE_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error: string) => {
  return {
    type: SPACE_DATA_FAILURE,
    payload: error,
  };
};
