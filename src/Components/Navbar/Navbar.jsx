import { Link } from "react-router-dom";
import logo from "../../assets/images/logo bg-black.png";


export default function Navbar() {
  return (
    <nav className="fixed h-[88px] top-0 z-50 w-full bg-[#03091E] px-6 py-3 shadow-md">
      <div className="flex items-center h-full justify-between max-w-7xl mx-auto">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} className="h-10 " alt="Ticketing System Logo" />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/home" className="text-white text-lg font-medium hover:opacity-80">
            Home
          </Link>
          <Link to="/services" className="text-white text-lg font-medium hover:opacity-80">
            Services
          </Link>
          <Link to="/about" className="text-white text-lg font-medium hover:opacity-80">
            About us
          </Link>
        </div>

        {/* Sign In Button */}
        <Link
          to="/signin"
          className="bg-gradient-to-r from-blue-500 to-cyan-400 w-[160px] h-[48px] flex items-center justify-center text-white px-6 py-2 rounded-[16px] text-lg font-medium shadow-md transition hover:opacity-90"
        >
          Sign in
        </Link>

        {/* Mobile Menu (Hidden by Default) */}
        <button className="md:hidden text-white focus:outline-none">
          <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 6h18M3 12h18m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
