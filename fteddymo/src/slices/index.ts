import { combineReducers } from "@reduxjs/toolkit";
import portfolioReducer from "./Portfolios/Reducer";
import authReducer from "./Auth/Reducer"; 

const rootReducer = combineReducers({
  portfolios: portfolioReducer,
  auth: authReducer,
});

export default rootReducer;
