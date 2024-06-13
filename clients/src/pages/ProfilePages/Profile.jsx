import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/ContextProvider";
import { toast, ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [turnUpdate, setTurnUpdate] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [showWarn, setShowWarn] = useState(true);

  const storedData = sessionStorage.getItem("auth");
  const auth = JSON.parse(storedData);

  const handleUpdate = () => {
    setTurnUpdate(!turnUpdate);
    setIsInputDisabled(!isInputDisabled);
    setShowWarn(!showWarn);
  };

  const handleSubmitUpdate = async () =>{
    const full_name = document.querySelector('#full_name').value;
    const birthDate = document.querySelector('#birthdate').value;
    const address = document.querySelector('#address').value;
    const phone = document.querySelector('#phone').value;
    const requestBody = {};

    if (full_name && full_name !== auth.full_name) {
      requestBody.full_name = full_name;
    }

    if (birthDate && birthDate !== auth.birthDate) {
      requestBody.birthDate = birthDate;
    }

    if (address && address !== auth.address) {
      requestBody.address = address;
    }

    if (phone && phone !== auth.phone) {
      requestBody.phone = phone;
    }
    
    const resp = await axios.put("https://s0217920-8000.asse.devtunnels.ms/api/job_connect/companies/" + auth.id_company, requestBody) 
    console.log(resp.data)
  }
    

  const handleImageChange = () => {}
    return (
      <div className="w-full h-screen">
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover={false}
          theme="colored"
          transition={Flip}
        />
        {/* <Nav /> */}
        <div className="max-w-[1024px] h-[600px] mx-auto">
          <div className="flex justify-center items-center h-full flex-wrap">
            {/* <div className="flex flex-col justify-center items-center sm:mr-40"> */}
            <div className="flex flex-col justify-self-center self-start mr-20">
              <label
                htmlFor="avatar"
                className="cursor-pointer border-4 border-purple-300 rounded-full overflow-hidden w-40 h-40 flex items-center justify-center"
              >
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                  className="hidden"
                  disabled={isInputDisabled}
                />
                <img
                  src={image || auth.logo || "/defaultProfile.png"}
                  alt="Profile Preview"
                  className="object-cover w-full h-full"
                />
              </label>
              {!isInputDisabled && (
                <p className="font-light text-gray-500 italic mt-2 text-center">
                  Tap to change
                </p>
              )}
            </div>

            {/* <div className="flex flex-col justify-center" id="profile-data"> */}
            <div
              className="flex flex-col justify-center self-start"
              id="profile-data"
            >
              <p className="text-2xl font-bold mb-4 text-center">
                Profile of {auth.full_name}
              </p>
              <div className="mb-4 w-[360px]">
                <label
                  htmlFor="zip-input"
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-400"
                >
                  Full name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    disabled={isInputDisabled}
                    type="text"
                    id="full_name"
                    aria-describedby="helper-text-explanation"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-purple-700 ${
                      isInputDisabled
                        ? `dark:placeholder-black`
                        : `dark-placeholder-gray-600`
                    } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    defaultValue={auth.full_name}
                    pattern="^\d{5}(-\d{4})?$"
                  />
                </div>
              </div>

              <div className="mb-4 w-[360px]">
                <label
                  htmlFor="zip-input"
                  className="block mb-1 text-md font-semibold text-gray-900 dark:text-gray-400"
                >
                  Birth date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    >
                      <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" />
                    </svg>
                  </div>
                  <input
                    disabled={isInputDisabled}
                    type="text"
                    id="birthdate"
                    aria-describedby="helper-text-explanation"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-purple-700 ${
                      isInputDisabled
                        ? `dark:placeholder-black`
                        : `dark-placeholder-gray-600`
                    } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    defaultValue={auth.birth_date}
                    pattern="^\d{5}(-\d{4})?$"
                  />
                </div>
              </div>

              <div className="mb-4 w-[360px]">
                <label
                  htmlFor="zip-input"
                  className="block mb-1 text-md font-semibold text-gray-900 dark:text-gray-400"
                >
                  Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    disabled={isInputDisabled}
                    type="text"
                    id="phone"
                    aria-describedby="helper-text-explanation"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-purple-700 ${
                      isInputDisabled
                        ? `dark:placeholder-black`
                        : `dark-placeholder-gray-600`
                    } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    defaultValue={auth.phone}
                    pattern="^\d{5}(-\d{4})?$"
                  />
                </div>
              </div>

              <div className="mb-4 w-[360px]">
                <label
                  htmlFor="zip-input"
                  className="block mb-1 text-md font-semibold text-gray-900 dark:text-gray-400"
                >
                  Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    disabled={isInputDisabled}
                    type="text"
                    id="address"
                    aria-describedby="helper-text-explanation"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-purple-700 ${
                      isInputDisabled
                        ? `dark:placeholder-black`
                        : `dark-placeholder-gray-600`
                    } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    defaultValue={auth.address}
                    pattern="^\d{5}(-\d{4})?$"
                  />
                </div>
              </div>

              <div className="w-[360px]">
                <label
                  className="block mb-2 text-md font-semibold text-gray-900 dark:text-gray-400"
                  htmlFor="cv"
                >
                  Curriculum vitae
                </label>
                <input
                  disabled={isInputDisabled}
                  // onChange={handleFileSize}
                  className={`w-full block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white dark:border-purple-700 ${
                    isInputDisabled
                      ? `dark:placeholder-black`
                      : `dark-placeholder-gray-600`
                  } p-2.5`}
                  id="cv"
                  type="file"
                />
              </div>

              <div
                className={`mt-8 flex justify-center items-center ${
                  showWarn ? "flex-col" : "flex-row"
                }`}
              >
      
                {!turnUpdate && (
                  <button
                    onClick={handleUpdate}
                    style={{ width: "100px" }}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500"
                  >
                    Update
                  </button>
                )}
                {turnUpdate && (
                  <button
                    onClick={handleUpdate}
                    style={{ width: "100px" }}
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-500"
                  >
                    Back
                  </button>
                )}
                {turnUpdate && (
                  <button
                    onClick={handleSubmitUpdate}
                    style={{ width: "100px" }}
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


export default Profile;
