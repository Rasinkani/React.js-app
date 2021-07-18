import { createLogic } from "redux-logic";

import actions from "./actions";
import types from "./types";
import endPoints from "../../../utils/EndPoints";
import * as API from "../../../utils/HTTPClient";
import { reset } from "redux-form";
import history from "../../../_helpers/history";

const getQuestions = createLogic({
  type: types.GET_QUESTIONS,
  latest: true,
  debounce: 1000,

  process({ MockHTTPClient, action }, dispatch, done) {
    let HTTPClient;
    if (MockHTTPClient) {
      HTTPClient = MockHTTPClient;
    } else {
      HTTPClient = API;
    }
    console.log("Running getQuestions Service");
    HTTPClient.Get(endPoints.QUESTIONS)
      .then((resp) => resp.data)
      .then((data) => {
        dispatch(actions.getQuestionsSuccess(data));
      })
      .catch((err) => {
        console.log("getQuestions -> err", err);
        var errorMessage = "Failed to get regions";
        if (err && err.code === "ECONNABORTED") {
          errorMessage = "Please check your internet connection.";
        }

        dispatch(
          actions.getQuestionsFail({
            title: "Error!",
            message: errorMessage,
          })
        );
      })
      .then(() => done());
  },
});

export default [getQuestions];
