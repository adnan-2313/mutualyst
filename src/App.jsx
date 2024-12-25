import Header from "./components/Header";
import "./App.css";
import Landing from "./pages/Landing";
const App = () => {
  return (
    <>
      <div className="h-screen animated-dotted-background">
        <Header />
        <Landing/>
      </div>
    </>
  );
};

export default App;
