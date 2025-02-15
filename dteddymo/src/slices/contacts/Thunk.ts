import API from "../../Helpers/axiosInstance";
import { CONTACT_ENDPOINTS } from "../../Helpers/endpoints";
import {
  deleteContactSuccess,
  contactsSuccess,
} from "./Reducer";
import { ContactType } from "../../Types/global";

// Fetch all contacts
export const getAllContacts = () => async (dispatch: any) => {
  try {
    const response = await API.get<{
      success: boolean;
      contacts: ContactType[];
    }>(CONTACT_ENDPOINTS.LIST);

    if (response != null && response.data != null) {
      let results = response.data;
      if (results.success) {
        dispatch(contactsSuccess(results.contacts));
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// Delete contact
export const deleteContact = (id: string) => async (dispatch: any) => {
  try {
    const response = await API.delete<{
      success: boolean;
      errors: string[];
    }>(CONTACT_ENDPOINTS.DELETE(id));
    if (response != null && response.data != null) {
      let results = response.data;
      if (results.success) {
        dispatch(deleteContactSuccess(id));
        return results;
      } else {
        return results;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
