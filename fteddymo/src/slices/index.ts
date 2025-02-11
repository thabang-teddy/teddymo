import { combineReducers } from "@reduxjs/toolkit";
import portfolioReducer from "./Portfolios/Reducer";
import experienceReducer from "./Experiences/Reducer";
import authReducer from "./Auth/Reducer"; 

const rootReducer = combineReducers({
  portfolios: portfolioReducer,
  experiences: experienceReducer,
  auth: authReducer,
});

export default rootReducer;
