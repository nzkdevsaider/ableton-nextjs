import FuturaFont from "@next/font/local";

const font = FuturaFont({ src: "../../public/fonts/FuturaPTMedium.otf" })

const Header = () => {
  return (
    <header className="p-3">
      <nav className={`flex justify-between items-center text-xl ${font.className}`}>
        <div className="flex items-center">
          <svg
            role="img"
            aria-labelledby="logo"
            className="m-4"
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="41"
            viewBox="0 0 45 21"
          >
            <title id="logo">Ableton</title>
            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
          </svg>
          <ul className="flex pl-5">
            <li className="mr-4">Products</li>
            <li className="mr-4">Support</li>
            <li className="mr-4">Learn</li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li className="mr-4 text-ableton-blue">Try Live for free</li>
            <li className="mr-4">Log in or register</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
