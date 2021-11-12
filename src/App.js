import "./App.css";
import Cards from "./components/Cards";
import Welcome from "./components/Welcome";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [aleatoryRenderStudents, setAleatoryRenderStudents] = useState([]);
  const [render, setRender] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        const studentsImage = response.filter(
          (element) => element.image !== ""
        );
        setStudents(studentsImage);
      });
  }, []);

  useEffect(() => {
    getRandom();
  }, [students]);

  const getRandom = () => {
    const gryffindor = students.filter(
      (student) => student?.house === "Gryffindor"
    );
    const slytherin = students.filter(
      (student) => student?.house === "Slytherin"
    );
    const hufflepuff = students.filter(
      (student) => student?.house === "Hufflepuff"
    );
    const ravenclaw = students.filter(
      (student) => student?.house === "Ravenclaw"
    );

    const gryffindorStudent =
      gryffindor[Math.floor(Math.random() * gryffindor.length)];
    const slytherinStudent =
      slytherin[Math.floor(Math.random() * slytherin.length)];
    const hufflepuffStudent =
      hufflepuff[Math.floor(Math.random() * hufflepuff.length)];
    const ravenclawStudent =
      ravenclaw[Math.floor(Math.random() * ravenclaw.length)];

    const aleatoryStudents = [
      gryffindorStudent,
      slytherinStudent,
      hufflepuffStudent,
      ravenclawStudent,
    ];

    const numberRandom = Math.floor(Math.random() * 3);

    aleatoryStudents.splice(numberRandom, 1);

    setAleatoryRenderStudents(aleatoryStudents);
  };

  const startApp = () => {
    setRender(false);
  };

  return (
    <div className="App">
      <div className="App-header">
        <section className="container_pai">
          {render ? (
            <Welcome start={startApp} />
          ) : (<div className="container_pai">
            {aleatoryRenderStudents.map((student, index) => (
              <Cards key={index} student={student} game={getRandom}/>
            ))}
            <button onClick={() => getRandom()}>Tente novamente</button>
          </div>
            
            )}
        </section>
      </div>
    </div>
  );
}

export default App;
