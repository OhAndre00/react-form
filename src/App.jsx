import FocusableInput from "./FocusableInput";
import Colors from "./Colors";
import ToDoList from "./ToDoList";

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
    // <div className="flex flex-col justify-center items-center h-screen">
    //   <h2 className="font-bold text-center">Focus:</h2>
    //   <FocusableInput />
    // </div>
    // ),

    <div>
      <h1 className="font-bold text-2xl">Color List</h1>
      <Colors colors={colorList} />
    </div>

    // <div>
    //   <ToDoList />
    // </div>
  );
}

export default App;
