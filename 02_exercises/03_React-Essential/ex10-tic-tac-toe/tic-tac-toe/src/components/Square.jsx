function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 bg-gray-800 text-4xl font-bold flex items-center justify-center hover:bg-gray-700"
    >
      {value}
    </button>
  );
}

export default Square;
