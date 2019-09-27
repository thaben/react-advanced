import { useReducer, useEffect } from "react";

const initialState = {
  data: [],
  isLoading: true,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
  case "ADD_CHARACTERS":
    return { ...state, isLoading: false, data: payload };
  default:
    return state;
  }
};

export default function useCharacters(settings) {
  const { url, format, resource } = settings; // ta settings einai ena object
  const [{ data, isLoading }, dispatch] = useReducer(reducer, initialState); // o useReducer mas epistrefei to reducer initralState, to initial state me to pou treksei to hook tha rendarei to isLoadingTrue k to data empty array
  useEffect(() => {
    fetch(`${url}/${resource}?format=${format}`)
      .then((res) => res.json())
      .then((characters) => {
        dispatch({ type: "ADD_CHARACTERS", payload: characters });
      });
  }, []); // dokimi [url] tha ksanaknei render otan allazei i timi

  return {
    data,
    isLoading,
  };
}
