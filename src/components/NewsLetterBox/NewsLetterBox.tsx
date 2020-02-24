import React from "react";
import { Button } from "react-bootstrap";
import { NewsLetterFormSignup, NewsLetterFormInput } from "./styled";

const NewsLetterBox = () => {
  return (
    <NewsLetterFormSignup>
      <NewsLetterFormInput placeholder="First name" />
      <NewsLetterFormInput placeholder="Last name" />
      <NewsLetterFormInput placeholder="Email" />
      <Button className="newsletterButton" variant="outline-dark">
        Sign up
      </Button>
    </NewsLetterFormSignup>
  );
};

export default NewsLetterBox;
