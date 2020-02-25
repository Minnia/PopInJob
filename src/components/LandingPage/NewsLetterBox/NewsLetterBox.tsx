import React from "react";
import { Button } from "react-bootstrap";
import {
  NewsLetterFormSignup,
  NewsLetterFormInput,
  NewsLetterText
} from "./styled";

const NewsLetterBox = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <NewsLetterText>
        <h1>Want to learn more?</h1>
        <p>
          Sign up with your email address to receive news and updates about open
          job positions
        </p>
      </NewsLetterText>
      <NewsLetterFormSignup>
        <NewsLetterFormInput placeholder="First name" />
        <NewsLetterFormInput placeholder="Last name" />
        <NewsLetterFormInput placeholder="Email" />
        <Button className="newsletterButton" variant="outline-dark">
          Sign up
        </Button>
      </NewsLetterFormSignup>
    </div>
  );
};

export default NewsLetterBox;
