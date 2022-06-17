import ChatBot from "../compoments/Chatbot";
import ServicesPage from "../Pages/ServicesPage";
import { usePages } from "../Providers/PagesContext";
import { Container } from "./styles";

export function MyApp() {
  const { Pages, currentPage } = usePages();

  return (
    <Container>
      {currentPage && <ServicesPage />}

      <ChatBot />
    </Container>
  );
}
