import styled from 'styled-components'

const NavBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  padding: 10px;
  width: 90%;

  @media (min-width: 840px) {
    width: 30%;
  }
`;
  

export {
  NavBarContainer
}
