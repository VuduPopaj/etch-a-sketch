const Tile = ({ dimension, color }) => {
  const style = {
    margin: "auto",
    border: "1px solid black",
    width: dimension,
    height: dimension,
  };
  const randomColor = (e) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (color === "black") {
      e.target.style.backgroundColor = color;
    } else {
      e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
  };

  return (
    <div className="gridElement" style={style} onMouseOver={randomColor} />
  );
};

export default Tile;
