import logo from "../../public/Logo.png";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <header className="bg-zinc-900 ">
      <div className="w-full px-6  flex max-w-7xl  py-3 mx-auto text-white backdrop-blur-3xl  justify-between">
        <img src="/Logo.png" alt="" className="w-44" />
        <nav className="flex justify-center">
          <ul className="flex items-center gap-4 text-lg justify-between">
            <li className="">Home</li>
            <li className="">Blogs</li>
          </ul>
          <Button className="text-white">Login</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
