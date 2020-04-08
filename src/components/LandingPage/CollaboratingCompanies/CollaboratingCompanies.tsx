import React from "react";
import Image from "react-bootstrap/Image";
import { CollaboratorsDiv, LogTitel, LogoSize } from "./styled";

const CollaboratingCompanies = () => {
  const T2 = require("../../../../src/assets/images/T2 tea.png");
  const Unilever = require("../../../../src/assets/images/Unilever.jpeg");
  const PepsiCo = require("../../../../src/assets/images/PepsiCo.png");
  const Gc = require("../../../../src/assets/images/Gc.png");
  const LV = require("../../../../src/assets/images/LV.png");
  const DIOR = require("../../../../src/assets/images/DIOR.jpeg");
  const Harrods = require("../../../../src/assets/images/Harrods.jpeg");
  const HM = require("../../../../src/assets/images/H&M.png");
  const Coca = require("../../../../src/assets/images/CocaCola.png");
  const logos = [Unilever, LV, DIOR, HM, Coca];

  return (
    <div>
      <div>
        <LogTitel>A few of our collaborators</LogTitel>
      </div>
      <LogoSize>
        <CollaboratorsDiv>
          {logos.map(logo => (
            <Image
              key={logo}
              style={{
                backgroundImage: `url(${logo})`,
                width: 200,
                height: 200,
                marginRight: 8
              }}
            />
          ))}
        </CollaboratorsDiv>
      </LogoSize>

      <hr />
    </div>
  );
};

export default CollaboratingCompanies;
