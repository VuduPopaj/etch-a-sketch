import Tile from "./Tile";

const Board = ({ size, color }) => {
  const dimension = Math.floor(400 / size);

  const board = [];
  for (let i = 0; i < size * size; i++) {
    board.push(<Tile key={i} dimension={dimension} color={color} />);
  }

  const boardStyle = {
    display: "inline-grid",
    gridTemplateColumns: `repeat(${size}, 1fr)`,
    maxWidth: "500px",
    maxHeight: "500px",
    margin: "auto",
    marginTop: "50px",
    backgroundColor: "white",
  };

  return <div style={boardStyle}>{board}</div>;
};

export default Board;
