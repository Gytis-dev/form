import { InputContainer } from "components/Input/InputStyle";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
}

export const Input = (props: Props) => {
  return <InputContainer {...props} error={props.error} />;
};
