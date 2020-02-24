import styled from "styled-components";
import constants from "../../constants";

export const NewsLetterFormSignup = styled.form`
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  background-color: ${constants.colors.landingPagePurple};
`;

export const NewsLetterFormInput = styled.input`
  width: 200px;
  height: 50px;
  margin-top: 50px;
  margin-right: 16px;
  outline: none;
  border-style: none;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: gray;
    padding-left: 16px;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: gray;
    padding-left: 16px;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: gray;
    padding-left: 16px;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: gray;
    padding-left: 16px;
  }
`;

export const NewsLetterText = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
  background: ${constants.colors.landingPagePurple};
`;
