import "./App.css";
import Cards from "./components/Cards";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [aleatoryRenderStudents, setAleatoryRenderStudents] = useState([]);

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


  const gryffindor = students.filter(
    (student) => student?.house === "Gryffindor"
  );

  const slytherin = students.filter((student) => student?.house === "Slytherin");

  const hufflepuff = students.filter(
    (student) => student?.house === "Hufflepuff"
  );

  const ravenclaw = students.filter((student) => student?.house === "Ravenclaw");

  let gryffindorStudent =
    gryffindor[Math.floor(Math.random() * gryffindor.length)];
  let slytherinStudent =
    slytherin[Math.floor(Math.random() * slytherin.length)];
  let hufflepuffStudent =
    hufflepuff[Math.floor(Math.random() * hufflepuff.length)];
  let ravenclawStudent =
    ravenclaw[Math.floor(Math.random() * ravenclaw.length)];

  let aleatoryStudents = [
    gryffindorStudent,
    slytherinStudent,
    hufflepuffStudent,
    ravenclawStudent,
  ];


  setAleatoryRenderStudents(aleatoryStudents)

  let renderStudents = aleatoryStudents;

  const selectStudents = () => {
    let removeIndex = Math.random() * 3;
    renderStudents.splice(0, 1, renderStudents[removeIndex]);
  };

  return (
    <div className="App">
      <div className="App-header">
        <section class="container_pai">
          {aleatoryRenderStudents.map((student, index) => (
            <Cards key={index} student={student} />
          ))}
        </section>
        <button>Tente novamente</button>
      </div>
    </div>
  );
}

export default App;
