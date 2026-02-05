function Status({ winner, isXNext }) {
  if (winner) {
    return <p className="mb-4 text-green-400">Winner: {winner}</p>;
  }

  return (
    <p className="mb-4">
      Next Player: <span className="font-bold">{isXNext ? "X" : "O"}</span>
    </p>
  );
}

export default Status;
