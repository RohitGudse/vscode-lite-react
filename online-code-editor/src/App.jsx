import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import OutputPanel from "./components/OutputPanel";
import InputPanel from "./components/InputPanel";
import StatusBar from "./components/StatusBar";
import { runCode } from "./extra/API";
import { templates } from "./extra/CodeTemplates";

function App() {
  const [code, setCode] = useState(templates.javascript);
  const [language, setLanguage] = useState(63);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");

  const handleRun = async () => {
    setOutput("Running...");
    try {
      const res = await runCode(code, language, input);
      setOutput(res.stdout || res.stderr || "No Output");
    } catch {
      setOutput("Error running code");
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar onRun={handleRun} setLanguage={setLanguage} />

      <div className="flex flex-1">
        <Sidebar />
        <Editor code={code} setCode={setCode} language={language} />
        <div className="w-1/3 flex flex-col">
          <InputPanel input={input} setInput={setInput} />
          <OutputPanel output={output} />
        </div>
      </div>

      <StatusBar language={language} />
    </div>
  );
}

export default App;