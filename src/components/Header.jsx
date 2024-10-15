import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-2 max-w-[1000px] mx-auto pt-4 border-b-2">
        <div className="flex justify-center items-center gap-2">
          <img src="/image.png" width={50} height={50} alt="" />
          <h1 className="bg-gradient-to-r text-2xl font-bold from-green-800 to-orange-600 text-transparent bg-clip-text">React router</h1>
        </div>
        <div className="space-x-6 flex items-center">
          <NavLink to="/" className={({isActive})=>isActive?'text-orange-600':'text-black' }>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?'text-orange-600':'text-black' }>About</NavLink>
          <NavLink to={"/contact"} className={({isActive})=>isActive?'text-orange-600':'text-black' }>Contact</NavLink>
          <NavLink to={"/support"} className={({isActive})=>isActive?'text-orange-600':'text-black' }>Support</NavLink>
          <NavLink to={"/user"} className={({isActive})=>isActive?'text-orange-600':'text-black' }>User</NavLink>
          <NavLink to={"/github"} className={({isActive})=>isActive?'text-orange-600':'text-black' }>Github</NavLink>
        </div>
        <div className="items-center justify-center flex bg-orange-600 rounded-md px-4">
            <button>Get started</button>
        </div>
      </div>
    </>
  );
};

export default Header;
