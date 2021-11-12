const Cards = ({ student}) => {
  return (
    <div className="container">
      <h2>{student?.name}</h2>
      <h3>{student?.house}</h3>
      <img src={student?.image} alt={student?.name}/>
    </div>
  );
};

export default Cards;
