import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";

// layouts

// views
import Views from "./modules";

const routes = [
  {
    path: "/",
    layout: DefaultLayout,
    exact: true,
    component: Views.QuestionsView,
  },
];

export default routes;
