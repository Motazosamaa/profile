import { About } from "./components/About";
import { Main } from "./components/Main";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App ">
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
