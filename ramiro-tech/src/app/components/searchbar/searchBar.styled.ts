import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
`;

const ButtonSearch = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 300px;
`;

export { Input, ButtonSearch, SearchBarContainer };
