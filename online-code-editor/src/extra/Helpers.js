export const formatOutput = (res) => {
  return res.stdout || res.stderr || "No Output";
};