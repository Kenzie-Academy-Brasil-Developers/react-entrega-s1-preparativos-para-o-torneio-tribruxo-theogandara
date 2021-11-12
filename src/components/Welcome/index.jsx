const Welcome = ({start}) => {
  return (
    <div className="welcome">
      <h1>Seja bem vindo</h1>
      <h2>Torneio tribruxo</h2>
      <button onClick={start}>Começar</button>
    </div>
  );
};

export default Welcome;
