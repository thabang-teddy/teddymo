import { combineReducers } from "@reduxjs/toolkit";
import portfolioReducer from "./Portfolios/Reducer";
import experienceReducer from "./Experiences/Reducer";
import contactReducer from "./Contacts/Reducer";
import authReducer from "./Auth/Reducer"; 
import alertReducer from "./Alerts/Reducer"; 

const rootReducer = combineReducers({
  portfolios: portfolioReducer,
  experiences: experienceReducer,
  contacts: contactReducer,
  auth: authReducer,
  alerts: alertReducer,
});

export default rootReducer;
