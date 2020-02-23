import React from "react";
import { ContentContainerDiv, ContentImage, ContentText } from "./styled";

const ContentContainer = () => {
  return (
    <div>
      <ContentContainerDiv>
        <ContentImage />
        <ContentText />
      </ContentContainerDiv>
      <ContentContainerDiv>
        <ContentText />
        <ContentImage />
      </ContentContainerDiv>
    </div>
  );
};

export default ContentContainer;
