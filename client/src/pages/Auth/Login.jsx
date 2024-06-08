import React, { useState } from "react";
import Wave from "../../assets/imgs/wave2.png"
import Spinner from "../../components/loading/Spinner"


const Login = () => {
  const [user , setUser] = useState([])
  const [isVerifying , setIsVerifying] = useState(false);
  
  const onSubmit = async () => {
    try {
      setIsVerifying(true);
        
    } catch (error) {
      console.error("Error submitting form:", error);
    
    }};
  return (
    <div className="h-screen overflow-y-hidden" style={{ backgroundImage: `url(${Wave})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundAttachment :'fixed'}}>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">

        <div className="sm:mx-auto border border-gray-300  w-[500px] p-20 rounded-xl bg-white backdrop-blur-md bg-opacity-85">
          {isVerifying ? <Spinner /> : (<>
            <div className="mb-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              JobConnect
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

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={onSubmit}
              >
                Sign in
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an Account?{" "}
            <a
              href="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </a>
            
          </p>
          </>)}
        </div>
      </div>
      
    </div>
  );
};

export default Login
