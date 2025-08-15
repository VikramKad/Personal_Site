import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="bg-background text-textcolor scroll-smooth">
        <Navbar />
        {/* Padding equals navbar height on mobile; no visual change on desktop */}
        <main className="pt-16 sm:pt-20">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Projects />
                  <About />
                  <Contact />
                </>
              }
            />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
