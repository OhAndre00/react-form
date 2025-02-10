import { useState } from "react";

function Welcome({ name }) {
  return <p>Welcome, {name}!</p>;
}

export default function InteractiveWelcome() {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <Welcome name={name} />
    </div>
  );
}
