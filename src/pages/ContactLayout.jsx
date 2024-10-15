import { NavLink, Outlet } from "react-router-dom";

const ContactLayout = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-3">
        <NavLink
          to=""
          exact
          className={({ isActive }) =>
            {return isActive ? "text-orange-600" : "text-black"}
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact/fbinfo"
          className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-black"
          }
        >
          Facebook
        </NavLink>
        <NavLink
          to="/contact/instainfo"
          className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-black"
          }
        >
          Instagram
        </NavLink>
        <NavLink
          to="/contact/whatsappinfo"
          className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-black"
          }
        >
          Whatsapp
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default ContactLayout;