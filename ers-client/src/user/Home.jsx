export default function UserHome() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Emergency Help</h1>

      <p className="text-gray-500 text-center">
        Press the button below to request an ambulance
      </p>

      {/* SOS Button */}
      <button className="w-48 h-48 rounded-full bg-red-600 text-white text-3xl font-bold shadow-lg hover:bg-red-700">
        SOS
      </button>

      {/* Status */}
      <div className="bg-white p-4 rounded shadow w-full max-w-md text-center">
        <p className="text-sm text-gray-500">Current Status</p>
        <p className="text-lg font-semibold text-blue-600">
          Searching for nearby ambulance...
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gray-200 w-full max-w-md h-64 rounded flex items-center justify-center text-gray-600">
        Map will appear here
      </div>
    </div>
  );
}
