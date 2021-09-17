const FirstPage = ({ setIsChoose }) => {
  return (
    <>
      <h1>Torneio Tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros!</p>
      <button onClick={() => setIsChoose(true)}>Começar!</button>
    </>
  );
};

export default FirstPage;
