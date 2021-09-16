import { useEffect, useState } from "react";
import FilterHouse from "../FilterHouses";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <FilterHouse students={students} />
    </>
  );
};

export default Students;
