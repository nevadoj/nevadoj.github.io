import NavBar from "./components/NavBar";
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <Projects /> */}
      <About />
    </div>
  );
}

export default App;
