import logo from "./dic.png";
import "./App.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <img src={logo} className="App-logo img-fuid" alt="logo" />
        </header>
     
        <footer className="text-center">Coded by ME</footer>
      </div>
    </div>
  );
}

export default App;
