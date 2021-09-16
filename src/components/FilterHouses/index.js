import ChooseStudents from "../ChooseStudents";

const FilterHouse = ({ students }) => {
  const selection = () => {
    let number = Math.floor(Math.random() * 12);
    return number;
  };

  let numberOne = selection();
  let numberTwo = 0;
  let numberThree = 0;

  let chooseOne = [];
  let chooseTwo = [];
  let chooseThree = [];

  if (students !== undefined && students.length > 0) {
    chooseOne = students[numberOne];

    do {
      numberTwo = selection();
      chooseTwo = students[numberTwo];
    } while (
      chooseTwo === undefined ||
      numberTwo === numberOne ||
      chooseTwo.house === chooseOne.house
    );

    do {
      numberThree = selection();
      chooseThree = students[numberThree];
    } while (
      chooseThree === undefined ||
      numberThree === numberOne ||
      numberThree === numberTwo ||
      chooseThree.house === chooseOne.house ||
      chooseThree.house === chooseTwo.house
    );
  }

  const witches = [chooseOne, chooseTwo, chooseThree];

  return <>{students !== undefined && <ChooseStudents witches={witches} />}</>;
};

export default FilterHouse;
