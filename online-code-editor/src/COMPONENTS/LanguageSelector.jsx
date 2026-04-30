function LanguageSelector({ setLanguage }) {
  return (
    <select
      onChange={(e) => setLanguage(Number(e.target.value))}
      className="text-black"
    >
      <option value="63">JavaScript</option>
      <option value="71">Python</option>
    </select>
  );
}

export default LanguageSelector;