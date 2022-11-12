import styled from "styled-components";

const Button = styled.button`
  background: ${(props) =>
    props.white ? props.theme.palette.white : props.theme.palette.purple};
  color: ${(props) =>
    props.white ? props.theme.palette.purpleText : props.theme.palette.white};
  border-radius: ${(props) => props.theme.spacing(1.2)};
  min-width: 156px;
  height: 48px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export default Button;
