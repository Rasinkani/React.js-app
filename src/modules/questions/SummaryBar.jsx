import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { questionsActions } from "./ducks";

class SummaryBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsAns: [],
    };
  }
  componentDidMount() {
    const { questionsActions } = this.props;
    questionsActions.getQuestions();
  }

  render() {
    const { optionsAns } = this.props.questions;
    console.log(" SummaryBar : state", this.state);
    console.log(" SummaryBar : props", this.props);

    return (
      <div
        style={{ paddingTop: 350, backgroundColor: "#ebeae4", height: 1500 }}
      >
        {optionsAns &&
          optionsAns.map((ans, i) => {
            return (
              <div key={i} style={{ paddingBottom: 15 }}>
                {ans.title} <br />
                {ans.ans}
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(
    "🚀 ~ file: summaryBar.jsx ~ line 53 ~ mapStateToProps ~ state",
    state
  );
  return {
    questions: state.Questions,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    questionsActions: bindActionCreators(questionsActions, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SummaryBar)
);
