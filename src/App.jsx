import FocusableInput from "./FocusableInput";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import MountedComponent from "./MountedComponent";
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
    ),
    (
      <div>
        <FocusableInput />
      </div>
    ),
    (
      <div>
        <MountedComponent />
      </div>
    )
  );
}

export default App;
