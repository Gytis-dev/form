import { CardContainer, SubTitle } from "components/Card/CardStyle";

interface Props {
  children: React.ReactNode;
  title: React.ReactNode;
  subTitle?: React.ReactNode;
}

export const Card = (props: Props) => {
  return (
    <CardContainer>
      <h1>{props.title}</h1>
      <SubTitle>{props.subTitle}</SubTitle>
      {props.children}
    </CardContainer>
  );
};
