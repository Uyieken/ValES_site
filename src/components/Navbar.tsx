import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, NavLink, Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "What We Do", id: "what" },
    { name: "How It Works", id: "how" },
    { name: "Refund Policy", id: "refund" },
  ];

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B1F3B]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Vales Logo"
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-medium text-white/90 hover:text-[#3570fb] transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}

          {/* Active Highlight Links */}
          <NavLink
            to="/terms"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-300 ${
                isActive
                  ? "text-[#3570fb] font-bold"
                  : "text-white/80 hover:text-[#3570fb]"
              }`
            }
          >
            Terms
          </NavLink>

          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-300 ${
                isActive
                  ? "text-[#3570fb] font-bold"
                  : "text-white/80 hover:text-[#3570fb]"
              }`
            }
          >
            Privacy
          </NavLink>

          <button
            onClick={() => handleNavClick("waitlist")}
            className="bg-[#3570fb] text-[#0B1F3B] px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-white hover:scale-105 transition-all duration-300"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-[#3570fb]"></div>
              <div className="w-4 h-0.5 bg-white"></div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-[#0B1F3B] border-t border-white/10 transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100 py-8"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 px-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-lg font-medium text-white hover:text-[#3570fb]"
            >
              {link.name}
            </button>
          ))}

          <NavLink
            to="/terms"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive
                  ? "text-[#3570fb] font-bold"
                  : "text-white hover:text-[#3570fb]"
              }`
            }
          >
            Terms
          </NavLink>

          <NavLink
            to="/privacy"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive
                  ? "text-[#3570fb] font-bold"
                  : "text-white hover:text-[#3570fb]"
              }`
            }
          >
            Privacy
          </NavLink>

          <button
            onClick={() => handleNavClick("waitlist")}
            className="w-full bg-[#3570fb] text-[#0B1F3B] py-4 rounded-xl text-center font-bold"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
