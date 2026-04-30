function OutputPanel({ output }) {
  return (
    <div className="flex-1 bg-black text-green-400 p-3 overflow-auto">
      <pre>{output}</pre>
    </div>
  );
}

export default OutputPanel;