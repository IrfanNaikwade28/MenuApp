import Home from "../../assets/icons/home.svg";
import Favorite from "../../assets/icons/heart.svg";
import Profile from "../../assets/icons/profile.svg";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "Favorites",
    path: "/favorites",
    icon: Favorite,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: Profile,
  },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-4 left-4 right-4">
      <div className="flex items-center justify-around rounded-full bg-white py-2 shadow-[0px_1px_4px_rgba(0,0,0,0.18)]">
        {navItems.map((navItem) => (
          <NavLink
            aria-label={navItem.label}
            key={navItem.path}
            to={navItem.path}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-full px-5 py-3 transition-all duration-300 ease-in-out
              ${isActive ? " bg-brand" : " bg-white"}`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={navItem.icon}
                  alt=""
                  className={`transition-all duration-300 ${isActive ? `h-6 w-6` : `h-5 w-5`}`}
                />
                <span
                  className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap text-sm font-medium ${isActive ? "opacity-100 max-w-18" : "opacity-0 max-w-0"}`}
                >
                  {navItem.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
