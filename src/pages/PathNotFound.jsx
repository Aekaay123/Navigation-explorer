import { NavLink } from "react-router-dom";

const PathNotFound = () => {
  return (
    <div className="text-3xl flex flex-col mt-20 justify-center items-center">
      <p>Path Not found</p>
      <NavLink to={"/"} className="text-orange-600" end={true}>Go to Home Page</NavLink>
    </div>
  );
};

export default PathNotFound;
