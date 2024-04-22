import styled from "styled-components";

export const UserToggleMenuStyles = styled.ul`
  position: absolute;
  top: 60px;
  right: 0px;
  display: flex;
  gap: 16;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  @media (min-width: 768px) {
    display: none;
  }
`;
