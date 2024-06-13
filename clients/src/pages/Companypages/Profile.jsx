import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/ContextProvider";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { data } from "autoprefixer";

const Profile = () => {
  const { auth } = useContext(AppContext);
  const [image, setImage] = useState(null);
  const [turnUpdate, setTurnUpdate] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [showWarn, setShowWarn] = useState(true);
  const [company , setCompany] = useState([])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleUpdate = () => {
    setTurnUpdate(!turnUpdate);
    setIsInputDisabled(!isInputDisabled);
    setShowWarn(!showWarn);
  };

  useEffect(()=>{
    const fetch = async () =>{
      const resp = await axios.get("https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/companies/" + auth.id_company)
      const data = await resp.data
      console.log(resp.data)
      setCompany(data.data[0])
    }
    fetch()
  } , [] )

  useEffect(()=>{
    console.log(company)
  } , [company])


  const onSubmit = async () => {
    try {
      const name = document.querySelector("#input-name").value;
      const phone = document.querySelector("#input-phone").value;
      const website = document.querySelector("#input-website").value;
      const address = document.querySelector("#input-address").value;

      const company_id = auth.id_company;

      console.log(name)
      console.log(phone)
      console.log(website)
      console.log(address)
      console.log(company_id)
      const res = await axios.put(
        `https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/companies/${company.id_company}`,
        {
          "name" : name , 
          "phone" : phone ,  
          "website" : website , 
          "address" : address 
        } 
      );
      console.log("🚀 ~ onSubmit ~ res:", res);
      console.log("INI RES", res);
      window.location.reload()
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // fullname, address, cv, phone, birthdate

  return (
    <div className="w-full h-screen">
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
              Profile of {auth.name}
            </p>
            <div className="mb-4 w-[360px]">
              <label
                htmlFor="zip-input"
                className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-400"
              >
                Company name
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
                  id="input-name"
                  aria-describedby="helper-text-explanation"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-purple-700 ${
                    isInputDisabled
                      ? `dark:placeholder-black`
                      : `dark-placeholder-gray-600`
                  } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder={auth.name}
                  defaultValue={auth.name}
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
                  id="input-phone"
                  aria-describedby="helper-text-explanation"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-purple-700 ${
                    isInputDisabled
                      ? `dark:placeholder-black`
                      : `dark-placeholder-gray-600`
                  } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder={auth.phone}
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
                Website
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  id="input-website"
                  aria-describedby="helper-text-explanation"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-purple-700 ${
                    isInputDisabled
                      ? `dark:placeholder-black`
                      : `dark-placeholder-gray-600`
                  } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder={auth.website}
                  defaultValue={auth.website}
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
                <textarea
                  disabled={isInputDisabled}
                  id="input-address"
                  rows="4"
                  className="text-md block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-purple-700 ${isInputDisabled ? `dark:placeholder-black`: `dark-placeholder-gray-600`}"
                >
                  {auth.address}
                </textarea>
              </div>
            </div>

            <div
              className={`mt-8 flex justify-center items-center ${
                showWarn ? "flex-col" : "flex-row"
              }`}
            >
              {(auth.birth_date === null ||
                auth.phone === null ||
                auth.address === null) &&
              showWarn ? (
                <p className="text-md text-red-500 mb-2">
                  Please fill all the data
                </p>
              ) : (
                ""
              )}
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
                  onClick={onSubmit}
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
