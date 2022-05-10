import First from "./components/First";
import Lightbulb from "./components/Lightbulb";
import MyName from "./components/MyName";


function App() {
  const output = "Hello world!! (it is props)"

  return (
    <div className="App">
      <First output={output} />
      <Lightbulb />
      <MyName />
    </div>
  );
}

export default App;
