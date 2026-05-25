import { useState } from "react"

function App() {
  const [text, setText] = useState("")

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition()
    recognition.continuous = true
    recognition.lang = "en-US"

    recognition.onresult = (event) => {
      let transcript = ""
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript
      }
      setText(transcript)
    }

    recognition.start()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-10">
        Speech To Text App
      </h1>

      <textarea
        value={text}
        readOnly
        className="w-96 h-40 p-4 border rounded-lg shadow"
        placeholder="Your speech text will appear here..."
      ></textarea>

      <button
        onClick={startListening}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Start Listening
      </button>
    </div>
  )
}

export default App