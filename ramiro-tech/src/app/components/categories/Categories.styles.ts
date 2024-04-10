import styled from 'styled-components'
const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 16rem;

  @media (max-width: 840px) {
    display: none;
  }
`;
 


export { CategoriesContainer }