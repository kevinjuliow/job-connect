import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../components/loading/Spinner";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const storedData = sessionStorage.getItem("auth");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setIsLoading(true);
          const response = await axios.get(
            "https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/jobapplicants"
          );
          const filter = response.data.data.filter(
            (res) =>
              res.applicantsModel.id_applicant === parsedData.id_applicant
          );
          setAppliedJobs(filter);
        }
      } catch (error) {
        console.error("Error fetching job applicants:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(appliedJobs)

  return (
    <div className="h-screen w-full">
    <ul className="w-full divide-y h-full">
      {isLoading ? (
        <div className="my-auto h-full flex justify-center items-start">
          <Spinner />
        </div>
    
      ) : (
        appliedJobs.map((job, index) => (
          <li key={index} className="p-4 flex justify-between">
            <div>
            <div className="font-bold">{job.jobsModel.companiesModel.name}</div>
            <div className="text-sm">{job.jobsModel.position}</div>
            <div className="text-sm">{job.jobsModel.companiesModel.email}</div>
            </div>

            <div>
            <div className="font-bold">{job.jobsModel.jobType}</div>
            <div className={`text-sm ${job.status === "waiting" ? "text-white" : job.status === "approved" ? "text-green-500" : "text-red-500"}`}>
                {job.status}
              </div>
            </div>
            
          </li>
        ))
      )}
    </ul>
  </div>
  );
};

export default AppliedJobs;
