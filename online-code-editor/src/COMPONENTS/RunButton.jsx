function RunButton({ onRun }) {
  return (
    <button
      onClick={onRun}
      className="bg-green-500 px-4 py-2 rounded"
    >
      Run
    </button>
  );
}

export default RunButton;