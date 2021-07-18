import types from "./types";
import { handleActions } from "redux-actions";
import { initialStateModel } from "../../../utils/Utilities";

const initialState = {
  allQuestions: {
    ...initialStateModel,
  },
  optionsAns: [],
};

// Reducers from redux-actions
export default handleActions(
  {
    // -------------------------------------
    [types.GET_QUESTIONS]: (state, { payload }) => ({
      ...state,
      allQuestions: {
        ...state.allQuestions,
        loading: true,
        pending: true,
      },
    }),
    [types.GET_QUESTIONS_SUCCESS]: (state, { payload }) => ({
      ...state,
      allQuestions: {
        ...state.allQuestions,
        loading: false,
        pending: false,
        data: payload,
      },
    }),

    [types.GET_QUESTIONS_FAIL]: (state, { payload }) => ({
      ...state,
      allQuestions: {
        ...state.allQuestions,
        loading: false,
        pending: false,
        hasError: true,
        error: { payload },
      },
    }),
    // -------------------------------------
    [types.OPTIONS_ANS_HANDLER]: (state, { payload }) => {
      let isExist = false;
      let updatedOptionsAns = state.optionsAns;
      updatedOptionsAns.map((ans, i) => {
        if (ans.step == payload.step) {
          ans.ans = payload.ans;
          isExist = true;
        }
      });
      if (!isExist) {
        updatedOptionsAns.push(payload);
      }
      return {
        ...state,
        optionsAns: updatedOptionsAns,
      };
    },
  },
  initialState
);
