export default function Topbar({ onMenuClick }) {
  return (
    <div className="h-14 bg-gray-400 border-b flex items-center px-4">
      <button onClick={onMenuClick} className="md:hidden mr-4 text-gray-700">
        ☰
      </button>
      <h1 className="font-semibold text-white-700">
        Emergency Response System
      </h1>
    </div>
  );
}
