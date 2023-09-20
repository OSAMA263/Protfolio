import Navbar from "./Global-Comps/Navbars/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
 import About from "./components/About/About";
 import Contact from "./components/Contact/Contact";
 import Skills from "./components/Skills/Skills";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider disableGlobalStyle={true}>
        <Home />
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </ChakraProvider>
    </>
  );
}

export default App;
