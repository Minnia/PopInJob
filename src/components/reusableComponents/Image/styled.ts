import styled from "styled-components";

export const DefaultImage = styled.div<{ height: number; width: number }>`
  position: absolute;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  z-index: -1;
`;
