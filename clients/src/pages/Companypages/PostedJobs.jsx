import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PostedJobCard from "../../components/card/PostedJobCard";
import { AppContext } from "../../context/ContextProvider";
import Spinner from "../../components/loading/Spinner";
import { log } from "three/examples/jsm/nodes/Nodes.js";

const PostedJobs = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const { auth, setIsInDetail } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);


  const [turnUpdate, setTurnUpdate] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [showWarn, setShowWarn] = useState(true);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsInDetail(true);
  };

  const onDelete = () =>{
    const del = async () =>{
      const resp = await axios.delete("https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/jobs/"+selectedJob.id_job)
      const data = await resp.data

      console.log("del" , data)
    }
    del() 
    window.location.reload()
  }

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        "https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/jobs"
      );

      console.log(resp.data.data);
      const respdata = await resp.data.data;
      // Filter the jobs based on the id_company
      const filteredJobs = await respdata.filter(
        (job) => job.companiesModel.id_company === auth.id_company
      );

      console.log("Filter", filteredJobs);
      console.log("INI DARI FETCHDATA", resp);
      // Update the state with the filtered jobs
      setPostedJobs(filteredJobs);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [auth.id_company]);



  const handleUpdate = () => {
    setTurnUpdate(!turnUpdate);
    setIsInputDisabled(!isInputDisabled);
    setShowWarn(!showWarn);
  };

  const onSubmit = async () => {
    try {
      const position = document.querySelector("#position").value;
      const salary = document.querySelector("#salary").value;
      const description = document.querySelector("#description").value;
      const jobType = document.querySelector("#type").value;

      const company_id = auth.id_company;

      console.log(position);
      console.log(salary);
      console.log(description);
      console.log(jobType);
      console.log(company_id);
      const res = await axios.put(
        `https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/jobs/${selectedJob.id_job}`,
        {
          position: position,
          salary: salary,
          description: description,
          jobType: jobType,
        }
      );
      console.log("🚀 ~ onSubmit ~ res:", res);
      console.log("INI RES", res);
      window.location.reload()
      // Refresh the page by refetching the data
      fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-screen w-full">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <Spinner />
        </div>
      ) : (
        // <div className="w-full">
        //   {selectedJob ? (
        //     <div className="w-full p-6 bg-white rounded-lg dark:bg-white dark:border-gray-700 m my-4">
        //       <img src={selectedJob.companiesModel.logo} className="w-[60px] mb-2" alt="" />
        //       <p className="text-xl font-bold">{selectedJob.position}</p>
        //       <p className="text-md mt-1 font-semibold">{selectedJob.companiesModel.name}</p>
        //       <p className="text-sm font-light">{selectedJob.companiesModel.address}</p>
        //       <p className="my-3 text-md">{selectedJob.description}</p>
        //       <div className="flex justify-between items-center mt-4">
        //         <p className="py-1 px-2 w-[100px] text-center text-purple-700">{selectedJob.job_type}</p>
        //       </div>
        //     </div>
        //   ) : (
        //     postedJobs.map((job) => (
        //       <PostedJobCard data={job} key={job.id_job} onJobClick={() => handleJobClick(job)} />
        //     ))
        //   )}
        // </div>
        <div className="w-full h-screen">
          {/* <Nav /> */}

          <div className="max-w-[1024px] h-[600px] mx-auto">
            {selectedJob ? (
              <div className="flex justify-center items-center h-full flex-wrap">
                <div className="flex flex-col justify-center" id="profile-data">
                  <p className="text-2xl font-bold mb-6 text-center">
                    Posted Job Data
                  </p>
                  <div className="mb-4 w-[360px]">
                    <label
                      htmlFor="zip-input"
                      className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-400"
                    >
                      Position
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
                            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
                          />
                        </svg>
                      </div>
                      <input
                        disabled={isInputDisabled}
                        type="text"
                        id="position"
                        aria-describedby="helper-text-explanation"
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-purple-700 ${
                          isInputDisabled
                            ? `dark:placeholder-black`
                            : `dark-placeholder-gray-600`
                        } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder={selectedJob.position}
                        pattern="^\d{5}(-\d{4})?$"
                        defaultValue={selectedJob.position}
                      />
                    </div>
                  </div>

                  <div className="mb-4 w-[360px]">
                    <label
                      htmlFor="zip-input"
                      className="block mb-1 text-md font-semibold text-gray-900 dark:text-gray-400"
                    >
                      Job Type
                    </label>
                    <div className="relative z-0 w-full group">
                      <select
                        disabled={isInputDisabled}
                        id="type"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value={"On Site"}>On Site</option>
                        <option value={"Remote"}>Remote</option>
                        <option value={"Hybrid"}>Hybrid</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4 w-[360px]">
                    <label
                      htmlFor="zip-input"
                      className="block mb-1 text-md font-semibold text-gray-900 dark:text-gray-400"
                    >
                      Salary
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
                            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        disabled={isInputDisabled}
                        type="number"
                        id="salary"
                        aria-describedby="helper-text-explanation"
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-purple-700 ${
                          isInputDisabled
                            ? `dark:placeholder-black`
                            : `dark-placeholder-gray-600`
                        } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder={selectedJob.salary}
                        pattern="^\d{5}(-\d{4})?$"
                        defaultValue={selectedJob.salary}
                      />
                    </div>
                  </div>

                  <div className="mb-4 w-[360px]">
                    <label
                      htmlFor="zip-input"
                      className="block mb-1 text-md font-semibold text-gray-900 dark:text-gray-400"
                    >
                      Job Description
                    </label>
                    <div className="relative">
                      <textarea
                        disabled={isInputDisabled}
                        id="description"
                        rows="4"
                        className="text-md block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-purple-700 ${isInputDisabled ? `dark:placeholder-black`: `dark-placeholder-gray-600`}"
                      >
                        {selectedJob.description}
                      </textarea>
                    </div>
                  </div>

                  <div
                    className={`mt-4 flex justify-center items-center ${
                      showWarn ? "flex-col" : "flex-row"
                    }`}
                  >
                    {(selectedJob.position === null ||
                      selectedJob.jobType === null ||
                      selectedJob.salary === null ||
                      selectedJob.description === null) &&
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
                        style={{ width: "100px" }}
                        onClick={onSubmit}
                        type="submit"
                        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500"
                      >
                        Save
                      </button>
                    )}
                  </div>
                  <button onClick={()=>onDelete()} className="mx-3 cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </div>
              </div>
            ) : (
              postedJobs.map((job) => (
                <PostedJobCard
                  data={job}
                  key={job.id_job}
                  onJobClick={() => handleJobClick(job)}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostedJobs;
