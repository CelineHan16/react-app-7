import { useState } from "react";

function MyName() {
  const [name, setName] = useState("Celine");
  const [age, setAge] = useState(18);

  // const [user, setUser] = useState({
  //   name: "Celine",
  //   age: 0
  // });

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onAgeChange(event) {
    setAge(event.target.value);
  }

  return (
    <div className="MyName">
      <h1>My name is {name}. I'm {age} years old.</h1>
      <input type="text" value={name} onInput={onNameChange} />
      <input type="number" value={age} onInput={onAgeChange} />
    </div>
  );
}

export default MyName;