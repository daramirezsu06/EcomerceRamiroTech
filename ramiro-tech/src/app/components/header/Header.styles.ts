import styled from 'styled-components'
const HeaderContainer = styled.header`
position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  transition: top 0.3s;
  background-color: #424242;
  display: flex;
  flex-direction: column;
  color: #e0e0e0;
  justify-content: space-between;
  align-items: center;
`
  


const ImageContainer = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
`
  


const MenuContainer = styled.div`
    width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;

  @media (min-width: 840px) {
    width: 20%;
  }
`

  


const Image = styled.img`
 width: 50px;
  height: auto;
`
 


const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
`
  


const TopContainer = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;

  @media (min-width: 840px) {
    flex-direction: row;
  }
`
 


const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #7a8bee;
  
  @media (min-width: 840px) {
    flex-direction: column;
  }
`
 


const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`
  


const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`
  


const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #7a8bee;

  @media (min-width: 840px) {
    display: none;
  }
`;
  


export {
  HeaderContainer,
  ImageContainer,
  MenuContainer,
  Image,
  Title,
  TopContainer,
  BottomContainer,
  IconContainer,
  IconsContainer,
  MenuButton
}