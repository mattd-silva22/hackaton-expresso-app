import ChatBot from "../compoments/Chatbot";
import Footer from "../compoments/Footer";
import { Header } from "../compoments/Header";
import FilterRow from "../compoments/Molecules/FilterRow";
import ServicesCardList from "../compoments/Organisms/ServicesCardList";
import { SearchBar } from "../compoments/SearchBar";
import { categories, services } from "../mock";
import { GlobalStyles } from "../styles/Global";
import { Container } from "./styles";

export function MyApp() {
  return (
    <Container>
      <GlobalStyles />
      <Header></Header>
      <SearchBar></SearchBar>
      <FilterRow categoriesTags={categories} />
      <ServicesCardList services={services} />
      <Footer></Footer>

      <ChatBot></ChatBot>
    </Container>
  );
}
