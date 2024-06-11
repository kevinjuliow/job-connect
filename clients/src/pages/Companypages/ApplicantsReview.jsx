import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/ContextProvider";
import axios from "axios";
import { FaFileDownload } from "react-icons/fa";
import Spinner from "../../components/loading/Spinner";

const ApplicantsReview = () => {
  const [appliedApplicants, setAppliedApplicants] = useState([]);
  const { auth } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        "https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/jobapplicants"
      );

      // Filter the jobs based on the id_company
      const filteredJobs = resp.data.data.filter(
        (applicants) =>
          applicants.jobsModel.companiesModel.id_company === auth.id_company &&
          (applicants.status === "waiting" || applicants.status === "pending" )
      );

      // Update the state with the filtered jobs
      setAppliedApplicants(filteredJobs);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const onApproved = async (id) => {
    try {
      await axios.put(
        `https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/jobapplicants/${id}`,
        {
          status: "approved",
        }
      );

      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen">
       <ul className="w-full divide-y" >
      {!isLoading ? (
        appliedApplicants.map((e) => (
         
            <li className="pb-3 sm:pb-4" key={e.id}>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={
                      e.applicantsModel.logo != null
                        ? e.applicantsModel.logo
                        : "defaultProfile.png"
                    }
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium  truncate ">
                    {e.applicantsModel.full_name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {e.applicantsModel.email}
                  </p>
                </div>
                <div>Position : {e.jobsModel.position}</div>
                <div className="w-[100px] rounded-lg flex gap-2 items-center p-2 bg-red-600 text-white justify-center cursor-pointer hover:opacity-80 mt-2">
                  CV <FaFileDownload />
                </div>
                <div className="w-[100px] rounded-lg items-center text-base font-semibold text-white bg-green-600 p-2 cursor-pointer hover:opacity-80 mt-2">
                  <p
                    onClick={() => onApproved(e.applicantsModel.id_applicant)}
                    className="text-center font-semibold"
                  >
                    Approve
                  </p>
                </div>
              </div>
            </li>
          
        ))
      ) : (
        <div className="flex justify-center items-center my-auto h-full">
          <Spinner />
        </div>
      )}
      </ul>
    </div>
  );
};

export default ApplicantsReview;
