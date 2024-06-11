import PropTypes from "prop-types";

const PostedJobCard = ({ data, onJobClick }) => {
  // Check if data is available
  if (!data) return null;

  // Destructure data
  const { position, salary } = data;
  const { name } = data.companiesModel;

  return (
    <div style={{ boxShadow: '0 0 8px 1px rgba(126, 34, 206, .2)' }} className="w-full p-6 bg-white rounded-lg dark:bg-white dark:border-gray-700 my-4">
      <p className="text-xl font-bold">{position}</p>
      <p className="text-md mt-1 font-semibold">{name}</p>
      <p className="my-3 text-md">Salary rate ${salary}</p>
      <div className="flex justify-end items-center mt-4">
        <button onClick={onJobClick} className="cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">View detail</button>
      </div>
    </div>
  );
};

// Define the prop types
PostedJobCard.propTypes = {
  data: PropTypes.shape({
    id_job: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    job_type: PropTypes.string.isRequired,
    companiesModel: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onJobClick: PropTypes.func.isRequired,
};

export default PostedJobCard;
