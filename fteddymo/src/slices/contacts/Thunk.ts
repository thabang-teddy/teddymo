import API from "../../Helpers/axiosInstance";
import { CONTACT_ENDPOINTS } from "../../Helpers/endpoints";
import {
  deleteContactSuccess,
  contactsSuccess,
  UpdateContactSuccess,
} from "./Reducer";
import { ContactType, SendContactType } from "../../Types/global";

// send message
export const SendContact = (contact : SendContactType) => async (dispatch: any) => {
  try {
    const response = await API.post<{
      success: boolean;
      errors: string[];
    }>(CONTACT_ENDPOINTS.PUBLIC_SEND, contact);

    if (response != null && response.data != null) {
      let results = response.data;
      return results;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

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

// Update contact
export const updateContact =
  ({ id, contact }: { id: string; contact: Partial<ContactType> }) =>
  async (dispatch: any) => {
    try {
      const response = await API.post<{
        success: boolean;
        contact: ContactType;
        errors: string[];
      }>(CONTACT_ENDPOINTS.UPDATE(id), contact);
      if (response != null && response.data != null) {
        let results = response.data;
        if (results.success) {
          dispatch(UpdateContactSuccess(results.contact));
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
