// Actions
import { createAction } from "redux-actions";
import types from "./types";

export default {
  getQuestions: createAction(types.GET_QUESTIONS),
  getQuestionsSuccess: createAction(types.GET_QUESTIONS_SUCCESS),
  getQuestionsFail: createAction(types.GET_QUESTIONS_FAIL),

  optionsAnsHandler: createAction(types.OPTIONS_ANS_HANDLER),
};
