import { FormInput } from "types/FormInput";
import { ActionsContainer, Form } from "./FormViewStyle";

import { FormField } from "components/FormField/FormField";
import { Action } from "types/Action";
import { Button } from "components/Button/Button";
import { Card } from "components/Card/Card";

interface Props {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  fields: FormInput[];
  actions: Action[];
}

export const FormView = (props: Props) => {
  return (
    <Card title={props.title} subTitle={props.subTitle}>
      <Form>
        {props.fields.map((item) => (
          <FormField key={item.key} field={item} />
        ))}
      </Form>
      <ActionsContainer
        singleAction={props.actions.length === 1 ? true : false}
      >
        {props.actions.map((item) => (
          <Button
            key={item.label}
            onClick={item.onClick}
            disabled={item.disabled}
            primary={item.primary}
          >
            {item.label}
          </Button>
        ))}
      </ActionsContainer>
    </Card>
  );
};
