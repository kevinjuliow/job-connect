import { useContext } from "react";
import { useLocation, useParams } from 'react-router-dom';
import Nav from "../../components/navigation/Nav"
import buildinglogo from "../../assets/imgs/buildinglogo.png"
import { AppContext } from "../../context/ContextProvider"
import axios from "axios"

const JobDetail = () => {
  // const { id_job } = useParams();
  const location = useLocation();
  const jobData = location.state?.job;
  const { auth } = useContext(AppContext);

  if (!jobData) {
    return <p>Loading job details...</p>;
  }

  const { id_job, position, salary, jobType, description } = jobData;
  const { logo, name, address } = jobData.companiesModel;

  const handleApply = async () => {
    const getCurrentDate = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
    
      return `${year}-${month}-${day}`;
    };

    try {
      console.log(id_job)
      const resp = await axios.post(
        "https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/jobapplicants",
        {
          apply_date: getCurrentDate(),
          applicantsModel: auth,
          jobsModel: jobData,
          status: "waiting",
        }
      )

      const data = resp.data.data[0];
      console.log(data);
      window.location.href = '/applicants/explore'
    } catch (error) {
      console.error("Error apply job:", error);
    }
  }

  return (
    <>
      <Nav/>
      <div id="home-page" className="flex items-center justify-center flex-wrap px-4 w-[1024px] mx-auto mt-28 flex-col gap-20">
        <div className="flex flex-col items-center justify-center">
          <img src={logo ? logo : buildinglogo} alt="" />
          <h1 className="text-2xl font-bold mt-3">{position}</h1>
          <h2 className="text-xl font-semibold mt-2 mb-[-24px]">{name}</h2>
        </div>
        <div>
          <p className="text-md font-semibold mb-1">ID JOB: {id_job}</p>
          <p className="text-md font-semibold mb-1">Address: {address}</p>
          <p className="text-md font-semibold mb-1">Type: {jobType}</p>
          <p className="text-md font-semibold mb-4">Salary: ${salary} / mo</p>
          <p className="text-md font-regular text-justify">Description: {description}</p>
        </div>
        <div className="flex items-center justify-center flex-row">
          <a href="/applicants/explore" className="mx-3">
            {/* <button className="flex items-center justify-center w-[156px] mt-[-24px] mb-6 cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-sm dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 font-bold py-2 px-4"> */}
            <button className="flex items-center justify-center w-[156px] mt-[-24px] mb-6 cursor-pointer focus:outline-none text-purple-700 bg-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-sm dark:bg-white dark:hover:bg-white dark:focus:ring-purple-900 font-bold py-2 px-4 border-2 border-purple-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 mr-2">
                <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
              Back
            </button>
          </a>
          <button onClick={handleApply} className="mx-3">
            <button className="flex items-center justify-center w-[156px] mt-[-24px] mb-6 cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-sm dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 font-bold py-2 px-4 border-2 border-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              Apply Now!
            </button>
          </button>
        </div>
      </div>
      
    </>
  );
};

export default JobDetail;
