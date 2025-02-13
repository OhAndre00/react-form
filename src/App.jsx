import Colors from "./Colors";
import FocusableInput from "./FocusableInput";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import MountedComponent from "./MountedComponent";
import UncontrolledLogin from "./UncontrolledLogin";

function App() {
  const handleLogin = (state) => {
    console.log("Login data: ", state);
  };

  const colorList = [
    { id: 1, name: "Red" },
    { id: 2, name: "Blue" },
    { id: 3, name: "Green" },
  ];

  return (
    // (
    //   <div>
    //     <InteractiveWelcome />
    //     <Login onLogin={handleLogin} />
    //   </div>
    // ),
    // (
    //   <div>
    //     <UncontrolledLogin />
    //   </div>
    // ),
    // (
    //   <div>
    //     <FocusableInput />
    //   </div>
    // ),
    // (
    //   <div>
    //     <MountedComponent />
    //   </div>
    // )

    <div>
      <h1 className="font-bold text-2xl">Color List</h1>
      <Colors colors={colorList} />
    </div>
  );
}

export default App;
