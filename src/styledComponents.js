import styled from "styled-components";
import mediaQueries from "./mediaQueries";

export const MainContainer = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  margin: 0;
  border: 0;
  font-size: 20px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Column = styled.div`
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
  flex-direction: column;
  border: 0;
  padding: 8px;
  width: 30%;
  margin: 3px;
  background-color: #${({ counter, isFixed }) => (counter === 0 ? "0EAF47" : isFixed ? "transparent" : "fff")};
  color: #${({ counter, isFixed }) => (counter === 0 || isFixed ? "fff" : "000")};
  ${mediaQueries.mobile`
    display: ${({ isFixed, isClickable }) => isFixed || isClickable ? "none" : "inherit"};
    width: 80%;
  `};
`;

export const ColumnPoints = styled(Column)`
  width: 5%;
  text-align: center;
  ${mediaQueries.mobile`
    width: 5%;
  `};
`;

export const ColumnTotalPoints = styled(Column)`
  width: 8%;
  text-align: center;
  background-color: #${({ isFixed }) => (isFixed ? "transparent" : "f1d62c")};
  color: #000;
  ${mediaQueries.mobile`
    width: 8%;
  `};
`;

export const Form = styled(Row)`
  margin-bottom: 20px;
`;

export const ColumnForm = styled(Column)`
  width: 58%;
  ${mediaQueries.mobile`
    width: 100%;
  `};
`;
