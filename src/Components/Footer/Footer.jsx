const Footer = () => {
  return (
    <footer className="bg-[#0a0f1d] text-white py-8">
      <div className="container mx-auto px-10 flex items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  border-gray-600 pt-6">
          {/* Left Section - Logo & Description */}
          <div>
            <h2 className="text-xl font-bold">
              <span className="text-blue-400">Ticketing</span> System
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Platform for Technical Support and providing solutions for our customer queries.
            </p>
          </div>

          {/* Center Section - Links */}
          <div className="flex flex-col md:flex-row md:justify-around">
            <div>
              <h3 className="font-semibold">Home</h3>
              <ul className="mt-2 space-y-1 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Services</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
              </ul>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="font-semibold">Login</h3>
              <ul className="mt-2 space-y-1 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Register</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section - Social Media */}
          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6  border-gray-600 pt-4">
          ©2025 Ticketing System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
