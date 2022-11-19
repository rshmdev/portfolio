import "./index.css";

export const CardStacks = ({ image, name }) => {
  return (
    <div className="card">
      <div className="container">
        <img src={image} alt="stack" />
        <h3>{name}</h3>
      </div>
    </div>
  );
};
