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
import { setUser } from "service/users";
import { v4 as uuidv4 } from "uuid";
import { validateEmail } from "utils/validateEmail";

export const ContactInformation: React.FC = () => {
  const fields = useAppSelector(({ formListSlice }) => formListSlice);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleFormSubmit = () => {
    const violations = Object.values(fields)
      .filter(({ formType: step }) => step === FormType.ContactInformation)
      .reduce((accumulator: Violation[], { key, value }: FormInput) => {
        switch (key) {
          case FormKey.Email: {
            if (!value) {
              accumulator.push({
                key: FormKey.Email,
                violation: "Email is a required field",
              });
            }
            if (!validateEmail(value)) {
              accumulator.push({
                key: FormKey.Email,
                violation: "Email should have correct format",
              });
            }
            break;
          }
          case FormKey.Phone: {
            if (!/^\d+$/.test(value)) {
              accumulator.push({
                key: FormKey.Phone,
                violation: "Phone should contain only numbers",
              });
            }
          }
        }

        return accumulator;
      }, []);

    if (violations.length) return dispatch(setViolations(violations));

    setUser({
      id: uuidv4(),
      name: fields.name.value,
      lastName: fields.lastName.value,
      email: fields.email.value,
      phone: fields.phone.value,
    });

    return navigate(routes.users);
  };

  const actions = (): Action[] => {
    return [
      { label: "Back", disabled: false, onClick: routeBack },
      {
        label: "Submit form",
        disabled: false,
        primary: true,
        onClick: handleFormSubmit,
      },
    ];
  };

  const formFields = () => {
    return Object.values(fields).filter(
      (item) => item.formType === FormType.ContactInformation
    );
  };

  const routeBack = () => {
    navigate(routes.personalInformation);
  };

  return (
    <FormView
      title="Contact information"
      subTitle="Please enter your contact information such as phone number and email so we could contact you."
      fields={formFields()}
      actions={actions()}
    />
  );
};
