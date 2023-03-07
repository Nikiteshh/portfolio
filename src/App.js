import "./App.css";
import tabs from "./Config/tabs";
import SetIcons from "./components/SetIcons/SetIcons";

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="content">
        <SetIcons config={tabs} />
      </div>
    </div>
  );
}

export default App;
