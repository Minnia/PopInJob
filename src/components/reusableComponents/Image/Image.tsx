import React, { FunctionComponent } from "react";
import { DefaultImage } from "./styled";

type OwnProps = {
  imageUrl: any;
};

type Props = OwnProps;

const Image: FunctionComponent<Props> = ({ imageUrl }) => {
  return (
    <DefaultImage height={25} width={25}>
      <img src={imageUrl} />
    </DefaultImage>
  );
};

export default Image;
