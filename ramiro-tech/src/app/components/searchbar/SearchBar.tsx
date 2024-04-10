import { SearchBarContainer, Input, ButtonSearch } from "./searchBar.styled";

const SearchBar: React.FC = (): React.ReactElement => {
  return (
    <SearchBarContainer>
      <Input
        type="text"
        placeholder="Search"
        className="border border-border"
      />
      <ButtonSearch type="submit" className="bg-resalt text-primary">
        Search
      </ButtonSearch>
    </SearchBarContainer>
  );
};

export default SearchBar;
