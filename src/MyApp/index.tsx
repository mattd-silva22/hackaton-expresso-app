import ChatBot from "../compoments/Chatbot";
import Footer from "../compoments/Footer";
import { Header } from "../compoments/Header";
import FilterRow, { ICategories } from "../compoments/Molecules/FilterRow";
import { SearchBar } from "../compoments/SearchBar";
import { GlobalStyles } from "../styles/Global";
import { Container } from "./styles";

const categories: ICategories[] = [
  {
    id: 1,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 2,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 3,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 3,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 4,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 5,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 6,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 7,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 8,
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
      <Footer></Footer>

      <ChatBot></ChatBot>
    </Container>
  );
}
