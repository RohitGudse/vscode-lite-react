function InputPanel({ input, setInput }) {
  return (
    <textarea
      placeholder="Input..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="p-2 border h-24"
    />
  );
}

export default InputPanel;