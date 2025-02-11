import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";

function App() {
  const handleLogin = (state) => {
    console.log("Login data: ", state);
  };

  return (
    (
      <div>
        <InteractiveWelcome />
        <Login onLogin={handleLogin} />
      </div>
    ),
    (
      <div>
        <UncontrolledLogin />
      </div>
    )
  );
}

export default App;
