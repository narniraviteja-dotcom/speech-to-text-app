function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Speech To Text App
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">

        <input
          type="file"
          className="mb-4 block w-full border p-2 rounded"
        />

        <button className="bg-green-500 text-white px-4 py-2 rounded w-full mb-4">
          Record Audio
        </button>

        <div className="border p-3 rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Transcription</h2>
          <p>Your transcription will appear here...</p>
        </div>

      </div>
    </div>
  );
}

export default App;