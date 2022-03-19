import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";
import GlobalStyles from "./assets/globalStyles";
import JourneyBuilderPage from "./pages/JourneyBuilder";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <JourneyBuilderPage />
    </ThemeProvider>
  );
}

export default App;
