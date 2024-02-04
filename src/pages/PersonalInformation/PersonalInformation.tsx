import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { useNavigate } from "react-router";
import { routes } from "service/routes";
import { FormView } from "components/FormView/FormView";
import { FormKey } from "types/FormKey";
import { FormInput } from "types/FormInput";
import { setViolations } from "store/violationsSlice";
import { Violation } from "types/Violation";
import { FormType } from "types/FormType";
import { Action } from "types/Action";

export const PersonalInformation: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const fields = useAppSelector(({ formListSlice }) => formListSlice);

  const { violations } = useAppSelector(
    ({ violationsSlice }) => violationsSlice
  );

  const handleFormSubmit = () => {
    const violations = Object.values(fields)
      .filter(({ formType: step }) => step === FormType.PersonalInformation)
      .reduce((accumulator: Violation[], { key, value }: FormInput) => {
        switch (key) {
          case FormKey.Name: {
            if (!value) {
              accumulator.push({
                key: FormKey.Name,
                violation: "First name is a required field",
              });
            }
            break;
          }
          case FormKey.LastName: {
            if (!value) {
              accumulator.push({
                key: FormKey.LastName,
                violation: "Last name is a required field",
              });
            }
            break;
          }
        }
        return accumulator;
      }, []);

    if (violations.length) return dispatch(setViolations(violations));

    return navigate(routes.contactInformation);
  };

  const actions = (): Action[] => {
    return [
      {
        label: "Next",
        disabled: violations.length > 0,
        primary: true,
        onClick: handleFormSubmit,
      },
    ];
  };

  const formFields = () => {
    return Object.values(fields).filter(
      (item) => item.formType === FormType.PersonalInformation
    );
  };

  return (
    <FormView
      title="Personal information"
      subTitle="Please enter your name and last name."
      fields={formFields()}
      actions={actions()}
    />
  );
};
