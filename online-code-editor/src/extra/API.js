import axios from "axios";

const API = axios.create({
  baseURL: "https://judge0-ce.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
  }
});

export const runCode = async (source_code, language_id, stdin) => {
  const res = await API.post("/submissions", {
    source_code,
    language_id,
    stdin
  });

  const token = res.data.token;

  const result = await API.get(`/submissions/${token}`);
  return result.data;
};