import Navbar from "./Global-Comps/Navbars/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import { ChakraProvider } from "@chakra-ui/react";
import AppWrapper from "./Global-Comps/AppWrapper";
import { theme } from "@chakra-ui/react";

delete theme.styles.global;

function App() {
  return (
    <ChakraProvider disableGlobalStyle={true}>
      <AppWrapper>
        <Home />
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </AppWrapper>
    </ChakraProvider>
  );
}

export default App;
