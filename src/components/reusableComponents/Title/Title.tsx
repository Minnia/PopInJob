import React, { FunctionComponent } from "react";

type OwnProps = {
  title: string;
};

type Props = OwnProps;

const Title: FunctionComponent<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Title;
