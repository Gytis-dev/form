import { createSlice } from "@reduxjs/toolkit";

import { FormInput } from "types/FormInput";
import { FormKey } from "types/FormKey";

import { PayloadAction } from "@reduxjs/toolkit";
import { FormOnChangePayload } from "types/FormOnChangePayload";
import { FormType } from "types/FormType";

const initialState: Record<FormKey, FormInput> = {
  [FormKey.Name]: {
    key: FormKey.Name,
    label: "Name",
    value: "",
    formType: FormType.PersonalInformation,
    testId: "firstName",
  },
  [FormKey.LastName]: {
    key: FormKey.LastName,
    label: "Last name",
    value: "",
    formType: FormType.PersonalInformation,
    testId: "lastName",
  },
  [FormKey.Phone]: {
    key: FormKey.Phone,
    label: "Phone",
    value: "",
    formType: FormType.ContactInformation,
    testId: "phone",
  },
  [FormKey.Email]: {
    key: FormKey.Email,
    label: "Email",
    value: "",
    formType: FormType.ContactInformation,
    testId: "email",
  },
};

export const formListSlice = createSlice({
  name: "step1Slice",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<FormOnChangePayload>) => {
      const { formKey, value } = action.payload;

      state[formKey].value = value;
    },
  },
});

export const { changeValue } = formListSlice.actions;

export default formListSlice.reducer;
