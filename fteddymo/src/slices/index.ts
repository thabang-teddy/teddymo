import { combineReducers } from "@reduxjs/toolkit";
import portfolioReducer from "./Portfolios/Reducer";
import experienceReducer from "./Experiences/Reducer";

const rootReducer = combineReducers({
  portfolios: portfolioReducer,
  experiences: experienceReducer,
});

export default rootReducer;
