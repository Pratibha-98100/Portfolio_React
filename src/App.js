import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Utils/Themes";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Components/Sections/Hero";
import Skills from "./Components/Sections/Skills";
import { AnimatePresence } from "framer-motion";
import Education from "./Components/Sections/Education";
import Experience from "./Components/Sections/Experience";

import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";
import Footer from "./Components/Sections/Footer";
import ProjectDetails from "./Components/Dialog/ProjectDetails";
import { useState } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding: 40px 0 100px;
  background: linear-gradient(
      38.73deg,
      rgba(91, 43, 214, 0.06) 0%,
      rgba(91, 43, 214, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(56, 189, 248, 0) 50%,
      rgba(56, 189, 248, 0.06) 100%
    );
  width: 100%;
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <AnimatePresence>
            <div>
              <Hero />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Education />
                <Contact />
              </Wrapper>
              <Footer />

              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </div>
          </AnimatePresence>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;