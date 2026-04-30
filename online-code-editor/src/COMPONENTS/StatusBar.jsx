function StatusBar({ language }) {
  return (
    <div className="bg-gray-900 text-white p-2">
      Language: {language === 63 ? "JavaScript" : "Python"}
    </div>
  );
}

export default StatusBar;