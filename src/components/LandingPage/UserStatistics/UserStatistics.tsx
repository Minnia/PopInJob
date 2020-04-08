import React from "react";
import {
  StatisticsText,
  LandingPageStatistics,
  UserStatisticsContainer,
} from "./styled";

const UserStatistics = () => {
  return (
    <UserStatisticsContainer>
      <StatisticsText>It's as easy as...</StatisticsText>
      <LandingPageStatistics />
    </UserStatisticsContainer>
  );
};

export default UserStatistics;
