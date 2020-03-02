import React from "react";
import { Button } from "react-bootstrap";
import {
  ContentContainerDiv,
  ContentImage,
  ContentText,
  ContentTitle
} from "./styled";

type Props = {
  contentText?: string;
  reverse?: boolean;
  title?: string;
};

const ContentContainer = ({ contentText, reverse, title }: Props) => {
  return reverse ? (
    <div>
      <ContentContainerDiv>
        <ContentTitle>{title}</ContentTitle>
        <ContentText>{contentText}</ContentText>
        <ContentImage />
      </ContentContainerDiv>
    </div>
  ) : (
    <div>
      <ContentContainerDiv>
        <ContentTitle>{title}</ContentTitle>
        <ContentImage />
        <ContentText>{contentText}</ContentText>
      </ContentContainerDiv>
    </div>
  );
};

export default ContentContainer;
