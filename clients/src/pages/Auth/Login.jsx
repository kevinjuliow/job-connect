import { useState, useEffect } from "react";
import Wave from "../../assets/imgs/wave2.png";
import Spinner from "../../components/loading/Spinner";
import axios from "axios";
import { toast, ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [userData, setUserData] = useState(null);

  const onSubmit = async () => {
    setIsVerifying(true);
    try {
      const response = await axios
        .post("http://localhost:8000/api/jobconnect/auth", {
        // .post("https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/auth", {
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value,
        });

      const user =
        response.data.companies == null
          ? response.data.applicants
          : response.data.companies;

      // Storing data in Local Storage and Session Storage
      sessionStorage.setItem("auth", JSON.stringify(user));

      if ("id_applicant" in user) {
        window.location.href = "/explore";
      } else if ("id_company" in user) {
        window.location.href = "/reviews";
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setIsVerifying(false);
        toast.error("Incorrect Email Or Password", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        });
      } else {
        console.error("Error during authentication:", error);
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        onSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (token) => {
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v1/userinfo",
        {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        }
      );
      setUserData(response.data);
      
    },
  });

  return (
    <div
      id="container"
      className="h-screen overflow-y-hidden"
      style={{
        backgroundImage: `url(${Wave})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundPositionY: "312px",
        // backgroundAttachment: "fixed",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto border border-gray-300  w-[500px] h-[600px] p-20 rounded-xl bg-white backdrop-blur-md bg-opacity-85 border border-gray-300">
          {isVerifying ? (
            <div className="w-full h-full flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="mb-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  <a href="/">JobConnect</a>
                </h1>
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <button
                    onClick={onSubmit}
                    className="w-full text-white dark:bg-zinc-800 py-2 rounded-md hover:opacity-85"
                  >
                    Login
                  </button>
                </div>

                <div className="w-full flex justify-center">
                  <button
                    onClick={login}
                    className="flex items-center rounded-lg px-6 py-2 text-sm font-medium text-white focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <title>Google-color</title>
                      <desc>Created with Sketch.</desc>
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="#4285F4"
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        />
                        <path
                          fill="#34A853"
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        />
                        <path
                          fill="#EA4335"
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        />
                        <path
                          fill="#FFC107"
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>

              <p className="mt-10 text-center text-sm text-gray-500">
                Dont have an Account?{" "}
                <a
                  href="/signup"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Sign up
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
