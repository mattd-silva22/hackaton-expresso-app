import Footer from "../compoments/Footer";
import { Header } from "../compoments/Header";
import { SearchBar } from "../compoments/SearchBar";
import { GlobalStyles } from "../styles/Global";
import { Container } from "./styles";

export function MyApp() {



    return (
        <Container>
            <GlobalStyles />
            <Header></Header>
            <SearchBar></SearchBar>
            <h1>ola</h1>
            <Footer></Footer>
        </Container>
    )
}