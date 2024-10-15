import { NavLink, Outlet } from "react-router-dom";

const UserLayout = () => {
  const user = [
    {
      id: 1,
      username: "Kencho",
    },
    {
      id: 2,
      username: "Karsel",
    },
    {
      id: 3,
      username: "Aekaay",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="flex gap-x-4">
          {user.map((u) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-orange-600" : "text-black"
                }
                key={u.id}
                to={`/user/${u.id}`}
              >
                {u.username}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
