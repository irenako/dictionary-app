import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        It was coded by Iryna Koval and is{" "}
        <a href="https" alt="link to GitHub">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https" alt="link to Netlify">
          hosted on Netlify{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
