import { AlertType } from "../../Types/global";
import { addAlert, removeAlert } from "./Reducer";

// Delete contact
export const addAlertMessage = (newAlert: AlertType) => async (dispatch: any) => {
  dispatch(addAlert(newAlert));
  setTimeout(() => {
    dispatch(removeAlert(newAlert.id));
  }, 3000);
};
