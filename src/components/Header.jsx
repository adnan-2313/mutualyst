import { Button } from "./ui/button";
const navItems = ["Home", "Membership", "Services", "Contacts"];
const Header = () => {
  return (
    <header className="">
      <div className="w-full px-6  flex max-w-7xl  py-3 mx-auto  backdrop-blur-xl  justify-between">
        <img src="/Logo2.png" alt="" className="w-44" />
        <nav className="hidden md:flex font-semibold  justify-center items-center gap-4">
          <ul className="flex items-center gap-4 text-md justify-between">
            {navItems.map((items, index) => {
              return (
                <li key={index} className="cursor-pointer text-zinc-300 hover:text-zinc-100">
                  {items}
                </li>
              );
            })}
          </ul>
        </nav>
        <Button variant="default" className="sm:px-6 sm:py-5 text-white">
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
