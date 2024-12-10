import "./App.css";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-black text-red-600  p-8 flex flex-col items-center">
      <Header></Header>
      <CardContainer></CardContainer>
    </div>
  );
}

export default App;
