import "./styles.css";

const ChooseStudents = ({ witches }) => {
  return (
    <div className="container">
      {witches?.map((item, index) => (
        <div key={index}>
          <img
            src={item.image}
            className="photo"
            style={{
              borderColor:
                item.house === "Gryffindor"
                  ? "red"
                  : item.house === "Hufflepuff"
                  ? "yellow"
                  : item.house === "Ravenclaw"
                  ? "blue"
                  : "green",
            }}
          />
          <h3 className="name">{item.name}</h3>
          <h3 className="house">{item.house}</h3>
        </div>
      ))}
    </div>
  );
};

export default ChooseStudents;
