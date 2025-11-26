import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-w-full p-4 gap-8 md:p-10 lg:min-w-5xl">
      <Header />
      <Body />
    </div>
  );
}

export default App;
