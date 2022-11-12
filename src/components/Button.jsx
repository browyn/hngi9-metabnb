import styled from "styled-components";

const Button = styled.button`
  background: ${(props) =>
    props.white ? props.theme.pallete.white : props.theme.pallete.purple};
  color: ${(props) =>
    props.white ? props.theme.pallete.purpleText : props.theme.pallete.white};
  border-radius: ${(props) => props.theme.spacing(1.2)};
  min-width: 156px;
  height: 48px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export default Button;
