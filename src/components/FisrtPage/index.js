import "./styles.css";

const FirstPage = ({ setIsChoose }) => {
  return (
    <>
      <div className="containerFirst">
        <h1 className="title">Torneio Tribruxo</h1>
        <p className="information">
          Clique no botão para encontrar os feiticeiros!
        </p>
        <button onClick={() => setIsChoose(true)} className="start">
          Começar!
        </button>
      </div>
    </>
  );
};

export default FirstPage;
