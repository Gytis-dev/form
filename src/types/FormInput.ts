import { FormType } from "types/FormType";
import { FormKey } from "./FormKey";

export interface FormInput {
  key: FormKey;
  label: string;
  value: string;
  formType: FormType;
  testId?: string;
}
