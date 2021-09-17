import "./styles.css";
import Students from "../Students";
import ChooseStudents from "../ChooseStudents";

const SecondPage = ({ setIsChoose }) => {
  return (
    <>
      <Students />
      <ChooseStudents />
      <button onClick={() => setIsChoose(false)} className="replay">
        Tente novamente
      </button>
    </>
  );
};

export default SecondPage;
