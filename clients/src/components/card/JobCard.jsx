import PropTypes from "prop-types";

const JobCard = (props) => {
  // logo (from company)
  // position (from jobs)
  // companyName (from company)
  // companyAddress (from company)
  // salary (from jobs)
  // jobType (from jobs)
  
  // const { jobId, logo, position, companyName, companyAddress, salary, jobType } = props.data
  
  return (
    <div style={{ boxShadow: '0 0 8px 1px rgba(126, 34, 206, .2)' }}  className="p-6 bg-white rounded-lg dark:bg-white dark:border-gray-700 w-[340px] mx-4 my-4">
      {/* <div className="flex justify-between">
        <img src={logo} className="w-[60px] mb-2" alt="" />
        <div>
          <svg className="w-[24px] cursor-pointer size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>
        </div>
      </div>
      <p className="text-xl font-bold">{position}</p>
      <p className="text-md mt-1 font-semibold">{companyName}</p>
      <p className="text-sm font-light">{companyAddress}</p>
      <p className="my-3 text-md">Salary rate ${salary}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="py-1 px-2 w-[100px] text-center border border-purple-700 rounded-lg text-purple-700">{jobType}</p>
        <a href={`/job/view/${jobId}`} className="cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">View detail</a>
      </div> */}
    </div>
  )
}

// Define the prop types
JobCard.propTypes = {
  data: PropTypes.shape({
    jobId: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyAddress: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    jobType: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard


