import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
const [message, setMessage] = useState("");
const [error, setError] = useState("");
const [history, setHistory] = useState([]);

  const uploadAudio = async () => {
    setError("");

if (!file) {
  setError("Please select an audio file.");
  return;
}
const allowedTypes = [
  "audio/mpeg",
  "audio/wav",
  "audio/x-wav",
  "audio/mp3",
  "audio/ogg"
];

if (!allowedTypes.includes(file.type)) {
  setError("Only MP3 and WAV files are allowed.");
  return;
}

const formData = new FormData();
formData.append("audio", file);

    try {
      const res = await axios.post(
  "https://speech-to-text-app-v5ty.onrender.com/upload",
  formData
);
      setHistory((prev) => [
  ...prev,
  {
    id: Date.now(),
    text: res.data.text,
  },
]);
} catch (err) {
  setError("Failed to upload or transcribe audio.");
  console.error(err);
  setMessage("Upload Failed");
}
  };
  return (
    <div>
      <h1>Speech To Text App</h1>

      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
  onClick={uploadAudio}
  className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
>
  Upload Audio
</button>

<h2 className="mt-4 text-lg font-semibold">
  {message}
</h2>

<h2 className="mt-6 text-2xl font-bold">
  Transcription History
</h2>

{history.map((item) => (
  <div
    key={item.id}
    className="bg-white shadow-md rounded-lg p-4 mt-2"
  >
    {item.text}
  </div>
))}
    </div>
  );
}

export default App;