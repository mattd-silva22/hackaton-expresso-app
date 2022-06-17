import { Header } from "../compoments/Header";
import FilterRow, { ICategories } from "../compoments/Molecules/FilterRow";
import { SearchBar } from "../compoments/SearchBar";
import { GlobalStyles } from "../styles/Global";
import { Container } from "./styles";

const categories: ICategories[] = [
  {
    title: "Assistencia",
    enabled: false,
  },
  {
    title: "Assistencia",
    enabled: false,
  },
  {
    title: "Assistencia",
    enabled: false,
  },
  {
    title: "Assistencia",
    enabled: false,
  },
  {
    title: "Assistencia",
    enabled: false,
  },
  {
    title: "Assistencia",
    enabled: false,
  },
  {
    title: "Assistencia",
    enabled: false,
  },
  {
    title: "Assistencia",
    enabled: false,
  },
  {
    title: "Assistencia",
    enabled: false,
  },
];

export function MyApp() {
  return (
    <Container>
      <GlobalStyles />
      <Header></Header>
      <SearchBar></SearchBar>
      <FilterRow servicesTags={categories} />
      <h1>ola</h1>
    </Container>
  );
}
