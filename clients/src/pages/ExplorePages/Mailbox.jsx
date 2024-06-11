import { useContext, useEffect, useState } from "react";
import Nav from "../../components/navigation/Nav";
import { AppContext } from "../../context/ContextProvider";
import axios from "axios";
import Spinner from "../../components/loading/Spinner";

const Mailbox = () => {
  const [mail, setMail] = useState(null);
  const { auth } = useContext(AppContext);

  useEffect(() => {
    const fetchMail = async () => {
      try {
        const resp = await axios.get(
          "https://s0217920-8000.asse.devtunnels.ms/api/jobconnect/jobapplicants"
        );
        const filteredJobs = resp.data.data.filter(
          (applicant) =>
            applicant.jobsModel.applicantsModel === auth.id_applicant &&
            applicant.status === "approved"
        );
        setMail(filteredJobs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMail();
  }, []);

  useEffect(() => {
    console.log(mail);
  }, [mail]);

  return (
    <div className="w-[1024px] h-[90%] mt-20 mx-auto overflow-y-hidden">
      <Nav />
      <h1 className="text-3xl font-bold tracking-tighter">MailBox</h1>
      <div className="w-full h-[700px] border border-gray-700 border-dotted mt-4 overflow-y-auto">
        <ul className="w-full bg-red-800 h-full">
          {mail != null ? (
            mail.map(
              (
                e 
              ) => (
                <li key={e.job_applicants} className="text-white">
                  {/* {e.jobModels.companiesModels.name} - {e.jobModels.position} */}
                </li>
              )
            )
          ) : (
            <Spinner />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Mailbox;
