import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/ContextProvider";
import axios from "axios";
import JobCard from '../../components/card/JobCard'

const Jobs = () => {
  const { searchQuery } = useContext(AppContext);
  const [jobList, setJobList] = useState([]);
  const [filteredJob, setFilteredJob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          "https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/jobs"
        );
        const data = resp.data; // no need for optional chaining here

        setJobList(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = jobList.filter((job) => job.position.includes(searchQuery));
    setFilteredJob(filtered);
  }, [searchQuery, jobList]);

  return (
    <div className="flex flex-wrap items-center justify-center max-w-[1200px] mx-auto pt-6 pb-12">
      {/* {JobList.map((data) => {
        return(
          <JobCard key={data.id} data={data} />
        )
      })} */}
      {filteredJob.map((data) => (
         <JobCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Jobs;
