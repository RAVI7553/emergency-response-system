export default function HospitalDashboard() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Hospital Dashboard</h1>
        <p className="text-gray-500">Incoming emergency patients</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Waiting Patients</p>
          <p className="text-2xl font-bold text-yellow-600">6</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">In Treatment</p>
          <p className="text-2xl font-bold text-blue-600">4</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Discharged Today</p>
          <p className="text-2xl font-bold text-green-600">9</p>
        </div>
      </div>

      {/* Patient queue */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Patient Queue</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Case ID</th>
              <th className="py-2">Patient</th>
              <th className="py-2">Condition</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">ER-201</td>
              <td className="py-2">Suresh</td>
              <td className="py-2">Heart Pain</td>
              <td className="py-2 text-yellow-600">Waiting</td>
            </tr>

            <tr className="border-b">
              <td className="py-2">ER-202</td>
              <td className="py-2">Anita</td>
              <td className="py-2">Accident</td>
              <td className="py-2 text-blue-600">In Treatment</td>
            </tr>

            <tr>
              <td className="py-2">ER-203</td>
              <td className="py-2">Rohit</td>
              <td className="py-2">Burn Injury</td>
              <td className="py-2 text-green-600">Discharged</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
