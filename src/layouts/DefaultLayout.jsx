import React from "react";
import SummaryBar from "../modules/questions/SummaryBar";

const DefaultLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <div className="row">
            <div className="col-9">
              <div className="container" style={{ paddingLeft: 50 }}>
                <ViewComponent />
              </div>
            </div>
            <div className="col-3">
              <SummaryBar />
            </div>
          </div>
        </>
      );
    }
  };
};

export default DefaultLayout;
