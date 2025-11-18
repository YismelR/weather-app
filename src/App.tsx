import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col lg:gap-8 lg:my-12 lg:px-12 lg:min-w-5xl">
      <Header />
      <Body />
    </div>
  );
}

export default App;
