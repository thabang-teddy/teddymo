import API from "../../Helpers/axiosInstance";
import { CONTACT_ENDPOINTS } from "../../Helpers/endpoints";
import { SendContactType } from "../../Types/global";

// send message
export const SendContact = (contact : SendContactType) => async () => {
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
