import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const uploadAudio = async () => {
    const formData = new FormData();
    formData.append("audio", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      setMessage(res.data.text);
    } catch (error) {
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

      <button onClick={uploadAudio}>
        Upload Audio
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;