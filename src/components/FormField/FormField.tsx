import { InputContainer, Label } from "components/FormField/FormFieldStyle";
import { Input } from "components/Input/Input";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { ChangeEvent } from "react";
import { changeValue } from "store/formListSlice";
import { setViolations } from "store/violationsSlice";
import { FormInput } from "types/FormInput";
import { FormKey } from "types/FormKey";
import { Error } from "./FormFieldStyle";

interface Props {
  field: FormInput;
}

export const FormField: React.FC<Props> = ({ field }) => {
  const { violations } = useAppSelector(
    ({ violationsSlice }) => violationsSlice
  );

  const getViolation = (name: FormKey) => {
    return violations.find(({ key }) => key === name)?.violation;
  };

  const dispatch = useAppDispatch();

  const handleFormInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: FormKey
  ) => {
    dispatch(setViolations([]));

    dispatch(changeValue({ formKey: key, value: e.target.value }));
  };

  return (
    <InputContainer>
      <Label>{field.label}</Label>
      <Input
        type="text"
        value={field.value}
        name={field.key}
        onChange={(e) => handleFormInputChange(e, field.key)}
        data-testid={field.testId}
        error={getViolation(field.key) ? true : false}
      />
      <Error>{getViolation(field.key)}</Error>
    </InputContainer>
  );
};
