import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 48px);
  padding: ${(props) => props.theme.spacing(3)};
`;

export default Container;
