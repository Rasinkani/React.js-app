import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { questionsActions } from "./ducks";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: null,
    };
  }
  componentDidMount() {
    const { questionsActions } = this.props;
    questionsActions.getQuestions();
  }

  optionHandler = (e, data) => {
    console.log("🚀 ~ file: Questions.jsx ~ line 20 ~ Questions ~ data", data);
    console.log("🚀 ~ file: Questions.jsx ~ line 20 ~ Questions ~ e", e);
    const { step, summaryTopic } = data;

    // if (step == 3) {
    const ansDto = {
      title: summaryTopic,
      ans: e.target.value,
      step: step,
    };

    this.props.questionsActions.optionsAnsHandler(ansDto);
    // }
  };
  render() {
    const { allQuestions } = this.props;
    console.log(
      "🚀 ~ file: Questions.jsx ~ line 20 ~ Questions ~ render ~ allQuestions",
      allQuestions
    );
    return (
      <div style={{ backgroundColor: "#fcfcfa" }}>
        {allQuestions &&
          allQuestions.data &&
          allQuestions.data.map((question, i) => {
            if (question.type == "selection") {
              return (
                <div key={i} style={{ paddingBottom: 30 }}>
                  <h3>{question.topic}</h3>
                  <p>{question.question}</p>
                  {question.btn &&
                    question.btn.map((b, i) => {
                      return (
                        <button
                          type="button"
                          class="btn btn-dark"
                          style={{ padding: 5, margin: 5 }}
                        >
                          {b}
                        </button>
                      );
                    })}
                </div>
              );
            } else if (question.type == "option") {
              return (
                <div key={i} style={{ paddingBottom: 30 }}>
                  <h3>{question.topic}</h3>
                  <p>{question.question}</p>

                  <div>
                    {question.ans &&
                      question.ans.map((ans, j) => {
                        return (
                          <div class="form-check">
                            <input
                              class={`form-check-input-${i}`}
                              type="radio"
                              name={`${question.topic}`}
                              id={ans + i}
                              value={ans}
                              onClick={(e) => this.optionHandler(e, question)}
                            />
                            <label class="form-check-label" for={ans + j}>
                              {ans}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                  {question.btn &&
                    question.btn.map((b, i) => {
                      return (
                        <button
                          type="button"
                          class="btn btn-dark"
                          style={{ padding: 5, margin: 5 }}
                        >
                          {b}
                        </button>
                      );
                    })}
                </div>
              );
            }
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allQuestions: state.Questions.allQuestions,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    questionsActions: bindActionCreators(questionsActions, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Questions)
);
