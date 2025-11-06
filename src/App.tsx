import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col gap-8 my-12 px-12 min-w-5xl">
      <Header />
      <Body />
    </div>
  );
}

export default App;
