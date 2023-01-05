import Header from "../Header/Header";

function App() {
  console.log("mo");
  const isLanding = window.location.pathname === "/";
  return <div className="App">{!isLanding && <Header />}</div>;
}

export default App;
