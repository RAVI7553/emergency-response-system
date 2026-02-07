export default function DriverHome() {
  return (
    <div className="space-y-6">
      {/* Page title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Driver Dashboard</h1>
        <p className="text-gray-500">Manage your availability and requests</p>
      </div>

      {/* Status card */}
      <div className="bg-white p-4 rounded shadow flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Current Status</p>
          <p className="text-xl font-bold text-green-600">ONLINE</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Go Offline
        </button>
      </div>

      {/* Current assignment */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Current Assignment</h2>
        <p>
          <strong>Patient:</strong> Ravi
        </p>
        <p>
          <strong>Pickup:</strong> Hazratganj, Lucknow
        </p>
        <p>
          <strong>Destination:</strong> Apollo Hospital
        </p>

        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
          Start Navigation
        </button>
      </div>

      {/* Incoming requests */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-4">Incoming Requests</h2>

        <div className="space-y-3">
          <div className="border p-3 rounded flex justify-between items-center">
            <div>
              <p>
                <strong>Patient:</strong> Neha
              </p>
              <p className="text-sm text-gray-500">Gomti Nagar, Lucknow</p>
            </div>
            <div className="space-x-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded">
                Accept
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded">
                Reject
              </button>
            </div>
          </div>

          <div className="border p-3 rounded flex justify-between items-center">
            <div>
              <p>
                <strong>Patient:</strong> Aman
              </p>
              <p className="text-sm text-gray-500">Alambagh, Lucknow</p>
            </div>
            <div className="space-x-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded">
                Accept
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
