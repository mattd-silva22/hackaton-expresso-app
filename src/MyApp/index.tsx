import ChatBot from "../compoments/Chatbot";
import AssistencePage from "../Pages/AssistencePage";
import CategoriesPage from "../Pages/CategoriesPage";
import ProfilePage from "../Pages/ProfilePage";
import ServicesPage from "../Pages/ServicesPage";
import { usePages } from "../Providers/PagesContext";
import { Container } from "./styles";

export function MyApp() {
  const { Pages, currentPage } = usePages();

  return (
    <Container>
      {currentPage === Pages.HOME && <ServicesPage />}
      {currentPage === Pages.CATEGORIES && <CategoriesPage />}
      {currentPage === Pages.ASSISTENCE && <AssistencePage />}
      {currentPage === Pages.PROFILE && <ProfilePage />}

      <ChatBot />
    </Container>
  );
}
