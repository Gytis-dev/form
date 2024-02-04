import { PrimaryButton, SecondaryButton } from "./ButtonStyle";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled: boolean;
  primary?: boolean;
}

export const Button = (props: Props) => {
  if (props.primary) {
    return <PrimaryButton {...props}>{props.children}</PrimaryButton>;
  }

  return <SecondaryButton {...props}>{props.children}</SecondaryButton>;
};
