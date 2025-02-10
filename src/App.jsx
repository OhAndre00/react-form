import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

function App() {
  const handleLogin = (state) => {
    console.log("Login data: ", state);
  };

  return (
    <div>
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
