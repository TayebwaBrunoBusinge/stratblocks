export default function Chat() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Describe Your Strategy</h1>
      <form className="w-full max-w-md">
        <textarea
          className="w-full h-32 p-2 border rounded mb-4"
          placeholder="Describe your trading strategy in plain English..."
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
