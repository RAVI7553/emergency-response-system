import { Link } from "react-router-dom";
import { useAuth } from "../contex/useAuth";

const MENU_BY_ROLE = {
  Admin: [
    { label: "Dashboard", path: "/admin/dashboard" },
    { label: "Ambulances", path: "/admin/ambulances" },
    { label: "Drivers", path: "/admin/drivers" },
    { label: "Hospitals", path: "/admin/hospitals" },
    { label: "Reports", path: "/admin/reports" },
  ],
  Driver: [
    { label: "Home", path: "/driver/home" },
    { label: "Requests", path: "/driver/requests" },
    { label: "History", path: "/driver/history" },
  ],
  User: [
    { label: "Home", path: "/user/home" },
    { label: "Tracking", path: "/user/tracking" },
    { label: "Profile", path: "/user/profile" },
  ],
  Hospital: [
    { label: "Dashboard", path: "/hospital/dashboard" },
    { label: "Requests", path: "/hospital/requests" },
    { label: "History", path: "/hospital/history" },
  ],
};

export default function Sidebar({ isOpen, onClose }) {
  const { user } = useAuth();
  const menu = MENU_BY_ROLE[user.role] || [];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`
          fixed md:static
          z-50
          w-64
          h-screen
          bg-blue-900
          text-white
          p-4
          transform transition-transform duration-200
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          flex flex-col
        `}
      >
        <button onClick={onClose} className="md:hidden mb-4 text-white text-lg">
          ✕
        </button>
        <div className="text-2xl font-bold mb-8">ERS</div>

        <div className="text-sm text-blue-200 mb-4">Role: {user.role}</div>
        <ul className="space-y-3">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="block p-2 rounded text-white hover:bg-blue-800"
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-blue-800 pt-4">
          <button className="hover:text-red-400">Logout</button>
        </div>
      </div>
    </>
  );
}
