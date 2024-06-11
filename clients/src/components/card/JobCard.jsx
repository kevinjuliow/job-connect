import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import buildinglogo from "../../assets/imgs/buildinglogo.png"

const JobCard = ({ data }) => {
  const navigate = useNavigate();
  // Check if data is available
  if (!data) return null;

  // Destructure data
  // logo (from company)
  // position (from jobs)
  // companyName (from company)
  // companyAddress (from company)
  // salary (from jobs)
  // jobType (from jobs)
  const { id_job, position, salary, jobType } = data;
  const { logo, name, address } = data.companiesModel;

  const handleJobDetail = () => {
    console.log(data)
    console.log(id_job)
    navigate(`/applicants/job/detail/${id_job}`, { state: { job: data } });
  };

  return (
    <div style={{ boxShadow: '0 0 8px 1px rgba(126, 34, 206, .2)' }}  className="p-6 bg-white rounded-lg dark:bg-white dark:border-gray-700 w-[340px] h-[240px] mx-4 my-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xl font-bold">{position}</p>
          <p className="text-md mt-1 font-semibold">{name}</p>
          <p className="text-sm font-light">{address}</p>
          <p className="my-3 text-md">Salary rate ${salary} / mo</p>
        </div>
        <img src={logo ? logo : buildinglogo} className="w-[60px] mb-2" alt="" />
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <p className="w-[100px] text-center text-purple-700">{jobType}</p>
        {/* <a href={`/applicants/explore/job/view/${jobId}`} className="cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Job detail</a> */}
        <button onClick={handleJobDetail} className="cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Job detail</button>
      </div>
    </div>
  )
}

// Define the prop types
JobCard.propTypes = {
  data: PropTypes.shape({
    id_job: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    jobType: PropTypes.string.isRequired,
    companiesModel: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }),
  }),
};

export default JobCard;
