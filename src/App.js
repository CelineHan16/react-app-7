import First from "./components/First";
import Lightbulb from "./components/Lightbulb";
import MyName from "./components/MyName";
import ThemeColor from "./components/ThemeColor";


function App() {
  const output = "Hello world!! (it is props)"

  return (
    <div className="App">
      <First output={output} />
      <Lightbulb />
      <MyName />
      <ThemeColor />
    </div>
  );
}

export default App;
