import RunButton from "./RunButton";
import LanguageSelector from "./LanguageSelector";

function Navbar({ onRun, setLanguage }) {
  return (
    <div className="bg-gray-900 text-white p-3 flex justify-between">
      <h1>VS Code Lite</h1>
      <div className="flex gap-3">
        <LanguageSelector setLanguage={setLanguage} />
        <RunButton onRun={onRun} />
      </div>
    </div>
  );
}

export default Navbar;