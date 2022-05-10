import First from "./components/First";
import Lightbulb from "./components/Lightbulb";


function App() {
  const output = "Hello world!! (it is props)"

  return (
    <div className="App">
      <First output={output} />
      <Lightbulb />
    </div>
  );
}

export default App;
