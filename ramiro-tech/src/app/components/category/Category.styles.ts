import styled from 'styled-components'
import { FrontProps } from './types'

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9eacfe;
  border: 1px solid #7a8bee;
  border-radius: 10px;
  height: 150px;
  width: 150px;
  perspective: 1000px;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  &:hover {
    cursor: pointer;
    transform: rotateY(180deg);
  }
`
  
const CardFace = styled.div`
 position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
`
 


const Front = styled(CardFace) <FrontProps>`
background: url(${(props) => props.$image}) no-repeat center/cover;
`
  


const Back = styled(CardFace)`
  background-color: #9eacfe;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 95%;
  font-weight: bold;
  color: #424242;
  text-align: center;
`;
  

export {
  CategoryContainer,
  Front,
  Back
}