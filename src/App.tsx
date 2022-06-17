import { MyApp } from "./MyApp";
import { PagesProvider } from "./Providers/PagesContext";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <PagesProvider>
        <MyApp />
      </PagesProvider>
    </>
  );
}

export default App;
