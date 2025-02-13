import { createSlice} from "@reduxjs/toolkit";
import { ContactType } from "../../Types/global";

interface ContactState {
  all: ContactType[];
  loading: Boolean;
  error: string[] | null;
}

const initialState: ContactState = {
  all: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contactsSuccess(state, action) {
      state.all = action.payload;
      state.loading = false;
    },
    UpdateContactSuccess(state, action) {
      state.all = [...state.all, action.payload];
      state.loading = false;
    },
    deleteContactSuccess(state, action) {
      state.all = [...state.all, action.payload];
      state.loading = false;
    }
  },
});

export const {
  contactsSuccess,
  UpdateContactSuccess,
  deleteContactSuccess
} = contactSlice.actions

export default contactSlice.reducer;
