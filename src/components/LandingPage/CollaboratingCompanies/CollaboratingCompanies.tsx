import React from "react";
import Image from "react-bootstrap/Image";
import { 
  CollaboratorsDiv,
  LogTitel,
  LogoSize
  
} from "./styled";

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

  return (
    <div>

      <div>
        <LogTitel>SOME OF OUR VALUED BRANDS</LogTitel>
      </div>
      <LogoSize>
      <CollaboratorsDiv>
        
          <Image src={T2} fluid />
        
          <Image src={Unilever} fluid />
        
          <Image src={PepsiCo} fluid />
         
          <Image src={Gc} fluid />

      </CollaboratorsDiv>
      </LogoSize>

      <hr/>

      <div>
        <LogTitel>SOME OF OUR COLLY's HAVE WORKED FOR</LogTitel>
      </div>

      <CollaboratorsDiv>
        
        <Image src={LV} fluid />
        
        <Image src={DIOR} fluid />
        
        <Image src={HM} fluid />
                
        <Image src={Harrods} fluid />
        
        <Image src={Coca} fluid />

      </CollaboratorsDiv>

    </div>
  );
};

export default CollaboratingCompanies;
