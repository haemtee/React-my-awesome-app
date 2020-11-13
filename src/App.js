import { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { id: "wer", name: "Andi", age: 20 },
    { id: "afs", name: "Joni", age: 26 },
    { id: "ffd", name: "Lucky", age: 29 },
  ]);
  const [showPersons, setShowPersons] = useState(false);

  const nameChangedHandler = (event, id) => {
    const personIndex = persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...persons[personIndex] };
    person.name = event.target.value;

    const namePersons = [...persons];
    namePersons[personIndex] = person;

    setPersons(namePersons);
  };

  const togglePersonsHandler = () => {
    const doesShow = showPersons;
    setShowPersons(!doesShow);
  };

  const deletePersonHandler = (personIndex) => {
    const tempPersons = [...persons];
    tempPersons.splice(personIndex, 1);
    setPersons(tempPersons);
  };

  let xpersons = null;
  let merah;

  if (showPersons) {
    xpersons = (
      <div>
        {persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => deletePersonHandler(index)}
              changed={(event) => nameChangedHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
    merah = "toggle";
  }

  let myClassesName = [];
  if (persons.length <= 2) {
    myClassesName.push("red");
  }
  if (persons.length <= 1) {
    myClassesName.push("bold");
  }

  return (
    <div className="App">
      <h1>This is my first react App</h1>
      <p className={myClassesName.join(" ")}> Hello there </p>
      <button className={merah} id="main" onClick={togglePersonsHandler}>
        Show Persons Button
      </button>
      {xpersons}
    </div>
  );
};

export default App;
