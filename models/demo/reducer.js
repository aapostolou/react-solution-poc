import { handleActions } from "redux-actions";

import { changeLanguage, fetchBasicData } from "./actions";

const initialState = {
  lang: "EN",
  loading: false,
  data: [],
};

const reducer = handleActions(
  {
    [changeLanguage.type]: (state, action) => ({
      ...state,
      lang: action.payload.language,
    }),
    [fetchBasicData.type]: (state) => ({
      ...state,
      loading: true,
    }),
    [fetchBasicData.succeeded.type]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload.data,
    }),
    [fetchBasicData.failed.type]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload.data,
    }),
  },
  initialState
);

export default reducer;
