import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import axios from "axios";

const JobPost = () => {
  const { auth } = useContext(AppContext);

  const onPost = async (event) => {
    event.preventDefault();

    const position = document.querySelector('#position').value;
    const salary = document.querySelector('#salary').value;
    const jobType = document.querySelector('#type').value;
    const description = document.querySelector('#description').value;
    const id = auth

    try {
      const resp = await axios.post(
        "https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/jobs",
        {
          position,
          salary,
          jobType,  
          description,
          companiesModel: id 
        }
      );

      const data = resp.data.data;
      console.log(data);
      window.location.reload()
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center mt-20">
      <div className="w-40 h-40 rounded-full">
        <img
          src={auth.logo || "defaultProfile.png"}
          alt=""
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="mt-4">
        <p>{auth.name}</p>
      </div>

      <form className="max-w-md mx-auto mt-20" onSubmit={onPost}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="position"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="position"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Job Position
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            id="salary"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="salary"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Salary
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Job Type
          </label>
          <select
            id="type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value={"On Site"}>On Site</option>
            <option value={"Remote"}>Remote</option>
            <option value={"Hybrid"}>Hybrid</option>
          </select>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            id="description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
            rows="10"
            cols="50"
            placeholder=""
            required
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Job Description
          </label>
        </div>

        <button
          className="bg-blue-500 w-full h-10 rounded-lg text-white hover:opacity-75"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default JobPost;
