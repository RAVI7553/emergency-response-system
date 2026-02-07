export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500">System overview and live status</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Active Emergencies</p>
          <p className="text-2xl font-bold text-red-600">12</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Available Ambulances</p>
          <p className="text-2xl font-bold text-green-600">8</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">On-duty Drivers</p>
          <p className="text-2xl font-bold text-blue-600">15</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Partner Hospitals</p>
          <p className="text-2xl font-bold text-purple-600">5</p>
        </div>
      </div>

      {/* Recent emergencies table */}
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Emergencies</h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Case ID</th>
              <th className="py-2">Patient</th>
              <th className="py-2">Location</th>
              <th className="py-2">Status</th>
              <th className="py-2">Ambulance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">ER-101</td>
              <td className="py-2">Ravi</td>
              <td className="py-2">Lucknow</td>
              <td className="py-2 text-red-600">Active</td>
              <td className="py-2">AMB-12</td>
            </tr>

            <tr className="border-b">
              <td className="py-2">ER-102</td>
              <td className="py-2">Neha</td>
              <td className="py-2">Delhi</td>
              <td className="py-2 text-yellow-600">Assigned</td>
              <td className="py-2">AMB-05</td>
            </tr>

            <tr>
              <td className="py-2">ER-103</td>
              <td className="py-2">Aman</td>
              <td className="py-2">Noida</td>
              <td className="py-2 text-green-600">Completed</td>
              <td className="py-2">AMB-03</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
