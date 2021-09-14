import { useEffect, useState } from "react";

const Students = () => {
  const [studens, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  }, []);

  return <></>;
};

export default Students;
