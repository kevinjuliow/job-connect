import axios from "axios";
import Wave from "../../assets/imgs/wave2.png";
import { toast, ToastContainer, Flip } from "react-toastify";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

const Signup = () => {

  const [isCompany , setIsCompany] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const type = document.querySelector("#type").value;
      if (type === "0") {
        try{
          const resp = await axios.post(
            // "http://localhost:8000/api/jobconnect/applicants"
            "https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/applicants"
            ,
            {
              full_name: document.querySelector("#name").value,
              email: document.querySelector("#email").value,
              password: document.querySelector("#password").value,
              phone: document.querySelector("#phone").value,
            }
          );
          sessionStorage.setItem("auth", JSON.stringify(resp.data.data[0]));
          window.location.href = "/applicants/explore";
        }catch(error){
          if (error.response && (error.response.status === 400 || error.response.status === 500) ) {
            toast.error("Email already Registered", {
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
          }
        }
      } else {
        try{
          const resp = await axios.post(
            // "http://localhost:8000/api/jobconnect/companies"
            "https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/companies"
            ,
            {
              name: document.querySelector("#name").value,
              email: document.querySelector("#email").value,
              password: document.querySelector("#password").value,
              phone: document.querySelector("#phone").value,
            }
          );
          sessionStorage.setItem("auth", JSON.stringify(resp.data.data[0]));
          window.location.href = "/company";
        }catch(error){
          if (error.response && (error.response.status === 400 || error.response.status === 500) ) {
            toast.error("Email already Registered", {
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
          }
        }
      }

  };

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

  const handleSelect = (e) =>{
    const selectedValue = e.target.value;
    // If the selected value is '0', show the option, otherwise hide it
    selectedValue === "0" ? setIsCompany(false) : setIsCompany(true)
  }

  
  const googleSignup = useGoogleLogin({
    onSuccess: async (token) => {
      try{
        const responseGoogle = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo",
          {
            headers: {
              Authorization: `Bearer ${token.access_token}`,
            },
          }
        );
  
        const User = await {
          "email" : responseGoogle.data.email , 
          "full_name" : responseGoogle.data.name , 
          "logo" : responseGoogle.data.picture
        }
        const response = await axios
          // .post("https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/applicants/email/" + responseGoogle.data.email, {
          .post("https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/applicants/email" , User);
  
        // sessionStorage.setItem("auth", JSON.stringify(response.data));
        console.log(response.data);
        sessionStorage.setItem("auth", JSON.stringify(response.data.data[0]));
        window.location.href = "/applicants/explore";
      }catch(error) {
        if (error.response && error.response.status === 500) {
          const responseGoogle = await axios.get(
            "https://www.googleapis.com/oauth2/v1/userinfo",
            {
              headers: {
                Authorization: `Bearer ${token.access_token}`,
              },
            }
          );
          const response = await axios
            // .post("https://s0217920-8000.asse.devtunnels.ms/api/applicant/email/" + responseGoogle.data.email, {
            .get("https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/applicants/email/" + responseGoogle.data.email);
    
    
          console.log(response.data);
          sessionStorage.setItem("auth", JSON.stringify(response.data.data[0]));
          window.location.href = "/applicants/explore"
        }
      }
    
    },
  });


  return (
    <div
      id="container"
      className="h-screen overflow-y-hidden flex justify-center items-center w-full"
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
      <div className="rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white w-[400px]">
        <h2 className="font-bold text-xl text-neutral-800">
          Welcome to JobConnect
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2">
          Login to Job Connect to Proceed Further
        </p>

        <form className="my-4" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name / Company Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="block w-full pl-3 rounded-md border border-gray-300 py-1 text-gray-900 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full pl-3 rounded-md border border-gray-300 py-1 text-gray-900 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="email"
                type="password"
                autoComplete="email"
                required
                className="block w-full pl-3 rounded-md border border-gray-300 py-1 text-gray-900 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="email"
                type="number"
                autoComplete="email"
                required
                className="block w-full pl-3 rounded-md border border-gray-300 py-1 text-gray-900 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              What are you?
            </label>
            <div className="mt-1">
              <select
                id="type"
                className="block w-full border border-gray-300 rounded-md h-10"
                onChange={handleSelect}
              >
                <option value="0">Applicant (Searching for a Job)</option>
                <option value="1">Company (Hiring)</option>
              </select>
            </div>
          </div>

          <button
            className="mt-4 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

          <div className="flex flex-col space-y-2 items-center">
            <a className={`cursor-pointer ${isCompany ? "hidden" : ""}`} id="googleBtn" onClick={googleSignup}>
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
            </a>

            <p className="text-center text-sm text-gray-500">
              Already have an Account?{" "}
              <a
                href="/signin"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
