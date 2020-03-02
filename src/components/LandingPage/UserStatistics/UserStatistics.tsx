import React from "react";
import {
  StatisticsText,
  LandingPageStatistics,
  UserStatisticsContainer
} from "./styled";

const UserStatistics = () => {
  return (
    <UserStatisticsContainer>
      <StatisticsText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend
        turpis diam. Aenean bibendum sapien augue, in egestas sapien semper
        eget. Nulla vitae convallis lorem. Etiam scelerisque augue non tortor
        consectetur venenatis. Sed finibus at nisl quis varius. Donec dignissim
        ipsum lacus, id tincidunt sapien molestie vel. Aliquam bibendum eros
        vitae tincidunt tempor. Curabitur nec enim tincidunt, ultricies libero
        quis, luctus est. Morbi id tristique tortor. Fusce id pharetra sapien,
        at scelerisque ante. Fusce massa velit, bibendum a orci in, blandit
        rutrum ipsum. Vestibulum augue lectus, varius ut magna a, molestie
        gravida erat.
      </StatisticsText>
      <LandingPageStatistics />
    </UserStatisticsContainer>
  );
};

export default UserStatistics;
