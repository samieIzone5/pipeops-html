import { Link } from "react-router-dom";

export default function Header({ showNav, setShowNav }) {
  return (
    <div className="flex w-[90%]  mx-auto justify-between items-center relative bg-white z-10">
      <div className="flex items-center gap-4 py-4">
        <img src="logo.svg" alt="logo" />
        <div>
          <h2 className="font-bold text-2xl">HealthWise</h2>
        </div>
      </div>
      {/* Links */}

      {/* Hamburger */}
      {!showNav ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="xl:hidden w-8 h-8 cursor-pointer transition-all ease-in-out duration-300"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      ) : (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 xl:hidden cursor-pointer transition-all ease-in-out duration-300"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}

      <div className="hidden xl:block">
        <div className="flex items-center justify-center space-x-12">
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            className="hover:text-primary transition-all ease-in duration-150"
          >
            Home
          </Link>
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            className="hover:text-primary transition-all ease-in duration-150"
          >
            For Doctors
          </Link>
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            className="hover:text-primary transition-all ease-in duration-150"
          >
            About
          </Link>
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            className="hover:text-primary transition-all ease-in duration-150"
          >
            Features
          </Link>
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            className="hover:text-primary transition-all ease-in duration-150"
          >
            Contact Us
          </Link>
        </div>
        <hr className={`${!showNav && "hidden"}`} />
      </div>

      <div className="xl:flex hidden gap-4">
        <Link
          className="bg-primary-foreground border text-primary text-sm hover:bg-primary-foreground py-2 px-8 rounded text-md"
          to="/sign-in"
        >
          Sign In
        </Link>
        <Link
          className="bg-primary text-primary text-sm text-white py-2 px-8 rounded text-md"
          to="/sign-up"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
