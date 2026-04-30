import MonacoEditor from "@monaco-editor/react";

function Editor({ code, setCode, language }) {
  return (
    <div className="flex-1">
      <MonacoEditor
        height="90vh"
        language={language === 63 ? "javascript" : "python"}
        value={code}
        onChange={(val) => setCode(val)}
      />
    </div>
  );
}

export default Editor;