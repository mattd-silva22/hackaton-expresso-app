import AppProvider from "./Providers/AppContext";
import { MyApp } from "./Router";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <MyApp />
      </AppProvider>
    </>
  );
}

export default App;
