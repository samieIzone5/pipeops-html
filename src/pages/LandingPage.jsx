import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

export default function LandingPage() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className=" w-full mx-auto h-screen">
      <Header showNav={showNav} setShowNav={setShowNav} />

      <div
        className={`absolute xl:hidden top-[4.5rem]  left-0 right-0 bottom-0 transition-all ease-in-out duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-auto py-8 flex flex-col space-y-6 bg-white">
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            className="w-[90%] mx-auto hover:text-primary transition-all ease-in duration-150"
          >
            Home
          </Link>
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            className="w-[90%] mx-auto hover:text-primary transition-all ease-in duration-150"
          >
            For Doctors
          </Link>
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            className="w-[90%] mx-auto hover:text-primary transition-all ease-in duration-150"
          >
            About
          </Link>
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            className="w-[90%] mx-auto hover:text-primary transition-all ease-in duration-150"
          >
            Features
          </Link>
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            className="w-[90%] mx-auto hover:text-primary transition-all ease-in duration-150"
          >
            Contact Us
          </Link>
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            className="w-[90%] mx-auto hover:text-primary transition-all ease-in duration-150 border text-center py-2"
            to="/sign-in"
          >
            Login
          </Link>
          <Link
            onClick={() => setShowNav((prev) => setShowNav(!prev))}
            to="/sign-up"
            className="w-[90%] mx-auto hover:text-primary transition-all ease-in duration-150 border text-center py-2 bg-primary text-white rounded-md hover:text-white"
          >
            Register
          </Link>
        </div>
        <hr className={`${!showNav && "hidden"} xl:hidden`} />
      </div>
      <div className="w-[90%] mt-4 mx-auto rounded-md bg-primary  h-96 lg:h-[24rem] xl:h-[32rem] flex justify-center xl:justify-between items-center ">
        <div className="xl:pl-48 pl-0 space-y-8 xl:w-[60%] w-[90%]">
          <div className="space-y-4">
            <h1 className="text-left font-bold text-2xl lg:text-3xl leading-[60px] text-white ">
              Medical Services at your Finger Tip
            </h1>
            <p className="text-white lg:text-md ">
              Ultimate destination for all things healthcare. With just a few
              clicks, you can effortlessly book appointments for diagnostic
              tests, medical services, and consultations with trusted doctors
            </p>
          </div>
          <div>
            <Link
              className="bg-primary-foreground hover:bg-primary-foreground text-dark lg:text-lg px-8 py-4 rounded-lg shadow-md"
              to="/sign-up"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="h-full xl:flex hidden pr-48">
          <img src="heroImage.png" alt="hero image" className="object-cover" />
        </div>
      </div>
      <div className="w-[90%] mt-16 mx-auto">
        <h2 className="text-2xl text-center">FIND TOP SPECIALISTS</h2>
        <div className=" mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 w-full lg:w-[80%] mx-auto">
          <div className="rounded-lg shadow-lg">
            <div className="w-full h-72 ">
              <img
                src="/doctor1.jpg"
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
            <div className="space-y-4 p-8 border ">
              <div className="flex items-center gap-4 ">
                <h2 className="font-bold text-lg">Dr. Tamara Aber</h2>
                <div className="bg-yellow-500 inline-flex items-center px-2 gap-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="white"
                      d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
                    />
                  </svg>
                  <p className="text-white font-bold">4.5</p>
                </div>
                (35)
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">Dentist</p>
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="#919191"
                        d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.441 20.441 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.874 1.874 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.638 20.638 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                      />
                    </g>
                  </svg>
                  <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-lg">
            <div className="w-full h-72">
              <img
                src="/doctor4.jpg"
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
            <div className="space-y-4 p-8 border">
              <div className="flex items-center gap-4 ">
                <h2 className="font-bold text-lg">Dr. Tamara Aber</h2>
                <div className="bg-yellow-500 inline-flex items-center px-2 gap-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="white"
                      d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
                    />
                  </svg>
                  <p className="text-white font-bold">4.5</p>
                </div>
                (35)
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">Dentist</p>
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="#919191"
                        d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.441 20.441 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.874 1.874 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.638 20.638 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                      />
                    </g>
                  </svg>
                  <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-lg">
            <div className="w-full h-72">
              <img
                src="/doctor2.jpg"
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
            <div className="space-y-4 p-8 border">
              <div className="flex items-center gap-4 ">
                <h2 className="font-bold text-lg">Dr. Tamara Aber</h2>
                <div className="bg-yellow-500 inline-flex items-center px-2 gap-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="white"
                      d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
                    />
                  </svg>
                  <p className="text-white font-bold">4.5</p>
                </div>
                (35)
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">Dentist</p>
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="#919191"
                        d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.441 20.441 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.874 1.874 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.638 20.638 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                      />
                    </g>
                  </svg>
                  <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-lg">
            <div className="w-full h-72">
              <img
                src="/doctor3.jpg"
                className="w-full h-full vobject-cover overflow-hidden"
              />
            </div>
            <div className="space-y-4 p-8 border">
              <div className="flex items-center gap-4 ">
                <h2 className="font-bold text-lg">Dr. Tamara Aber</h2>
                <div className="bg-yellow-500 inline-flex items-center px-2 gap-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="white"
                      d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
                    />
                  </svg>
                  <p className="text-white font-bold">4.5</p>
                </div>
                (35)
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">Dentist</p>
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="#919191"
                        d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.441 20.441 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.874 1.874 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.638 20.638 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                      />
                    </g>
                  </svg>
                  <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-16 mx-auto bg-[#f1f1f3] py-8">
        <div className="w-[90%]  mx-auto">
          <h2 className="text-2xl text-center">OUR SERVICES</h2>

          <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-x-32 gap-y-16  py-8">
            <div className="space-y-4">
              <h2 className="font-bold">Doctor Appointment</h2>
              <p>
                Experience hassle-free doctor appointment booking with our
                intuitive online platform. Discover trusted healthcare
                professionals, explore their profiles, and schedule appointments
                at your convenience.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-bold">Diagnostic Center</h2>
              <p>
                Easily schedule your diagnostic tests with our seamless booking
                system. Our platform allows you to search for diagnostic centers
                based on location, test type and availability
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-bold">Medical Services Booking</h2>
              <p>
                Unlock a world of healthcare possibilities with our medical
                services booking feature. Explore a wide range of services
                tailored to meet your unique healthcare needs from routine
                check-ups to specialized treatments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
