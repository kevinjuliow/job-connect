import { Link as ReactScroll } from "react-scroll";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/ContextProvider";

const Nav = () => {
  const [checkAuth, setCheckAuth] = useState(false);
  const {auth, setAuth} = useContext(AppContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Retrieving data from Local Storage and Session Storage
  const retrieveData = () => {
    const storedData = sessionStorage.getItem("auth");
    if (storedData) {
      setCheckAuth(true);
      const parsedData = JSON.parse(storedData);
      setAuth(parsedData);
    }
  };

  const logout = () => {
    sessionStorage.clear()
  }

  useEffect(() => {
    retrieveData();
  } , []);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <nav className="backdrop-blur-md bg-white bg-opacity-75 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <div>
          <a
            href={!checkAuth ? "/" : "/explore"}
            className="flex items-center space-x-3 rtl:space-x-reverse text-black opacity-90 font-bold"
          >
            <p className="text-2xl mr-[-12px]">Job</p>
            <p className="text-2xl">Connect</p>
          </a>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/> */}
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto">
          {!checkAuth && (

            <ul className="text-black opacity-90 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <ReactScroll
                  className="explore-btn cursor-pointer hover:text-purple-500"
                  to="home-page"
                  smooth={true}
                  offset={-120}
                  duration={100}
                >
                  Home
                </ReactScroll>
              </li>
              <li>
                <ReactScroll
                  className="explore-btn cursor-pointer hover:text-purple-500"
                  to="reviews-page"
                  smooth={true}
                  offset={-120}
                  duration={100}
                >
                  Reviews
                </ReactScroll>
              </li>
              <li>
                <ReactScroll
                  className="explore-btn cursor-pointer hover:text-purple-500"
                  to="about-page"
                  smooth={true}
                  offset={-120}
                  duration={100}
                >
                  About
                </ReactScroll>
              </li>
            </ul>
          )}
          </div>
          <div>
          {!checkAuth ? (
            <a
              href="/login"
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none hover:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mb-2"
              style={{ cursor: "pointer" }}
            >
              LOGIN
            </a>
          ) : 
          (
            <>
              <img
                id="avatarButton"
                type="button"
                data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start"
                className="w-10 h-10 rounded-full cursor-pointer"
                src={auth.logo == null ? "defaultProfile.png" : auth.logo}
                alt="User dropdown"
                onClick={toggleDropdown}
              />

              <div
                id="userDropdown"
                className={`z-10 ${
                  isDropdownOpen ? "" : "hidden"
                } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-0 mt-4`}
              >
                <div className="px-4 py-3 text-sm text-black">
                  <div>{auth.full_name}</div>
                  <div className="font-medium truncate">{auth.email}</div>
                </div>
                <div className="py-1 cursor-pointer">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
                  >
                    Profile
                  </a>
                </div>
                <div className="py-1 cursor-pointer">
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
                    onClick={logout}
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </>
          )
          }
          </div>
      </div>
    </nav>
  );
};

export default Nav;
