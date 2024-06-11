import {  useState, useContext } from "react";
import Profile from "../../../pages/Companypages/Profile";
import PostedJobs from "../../../pages/Companypages/PostedJobs";
import { AppContext } from "../../../context/ContextProvider";
import ApplicantsReview from "../../../pages/Companypages/ApplicantsReview";
import JobPost from "../../../pages/Companypages/JobPost";
import { MdOutlineRateReview } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";

const Sidebar = () => {
  const [page , setPage] = useState(false)
  const [inPostedJobs, setInPostedJobs] = useState(true)
  const [inReviews , setInReviews] = useState(false)
  const [inSetting , setInSetting] = useState(false)
  const [inPost , setInPost] = useState(false)
  const [open, setIsOpen] = useState(false)
  const { isInDetail  , clickedNav } = useContext(AppContext)


  const toggleSidebar = () => {
    setIsOpen(!open)
  }

  return (
    <div className="max-w-[1024px] mx-auto mt-[64px]">
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 z-40 w-64 h-screen pt-20 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } bg-white sm:translate-x-0 dark:bg-white dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-8 pb-4 overflow-y-auto bg-white dark:bg-white flex flex-col justify-between">
          <div>
            <ul className="space-y-2 font-medium">
              <li>
                {!page && <button
                  data-drawer-target="separator-sidebar"
                  data-drawer-toggle="separator-sidebar"
                  aria-controls="separator-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 mt-2 ms-0 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  onClick={toggleSidebar}
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                <p className="ml-3 text-md">Menu</p></button>}
              </li>
              <li>
                <button onClick={() => clickedNav(setInPostedJobs , setInReviews , setInSetting , setInPost)}
                  className={`flex items-center p-2 text-purple-700 rounded-lg ${inPostedJobs? 'dark:text-purple-700' : 'dark:text-gray-900'} hover:bg-gray-100 dark:hover:bg-purple-50 group`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                  <span className="ms-3">Posted Jobs</span>
                </button>
              </li>
              <li>
                <button onClick={() => clickedNav(setInReviews , setInPostedJobs , setInSetting , setInPost)}
                  className={`flex items-center p-2 text-purple-700 rounded-lg ${inReviews ? 'dark:text-purple-700' : 'dark:text-gray-900'} hover:bg-gray-100 dark:hover:bg-purple-50 group`}
                >
                  <MdOutlineRateReview className="text-xl"/>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Applicants Reviews 
                  </span>
                </button>
              </li>
              <li>
                <button onClick={() => clickedNav(setInPost , setInReviews , setInPostedJobs , setInSetting)}
                  className={`flex items-center p-2 text-purple-700 rounded-lg ${inPost ? 'dark:text-purple-700' : 'dark:text-gray-900'} hover:bg-gray-100 dark:hover:bg-purple-50 group`}
                >
                  <BsBriefcase className="text-xl"/>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Post A Job
                  </span>
                </button>
              </li>
              <li>
                <button onClick={() => clickedNav(setInSetting , setInPostedJobs , setInReviews , setInPost)}
                  className={`flex items-center p-2 text-purple-700 rounded-lg ${inSetting ? 'dark:text-purple-700' : 'dark:text-gray-900'} hover:bg-gray-100 dark:hover:bg-purple-50 group`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                { isInDetail && ( <a href="/company">
                  <button className="flex items-center justify-center w-[156px] mt-6 mb-6 cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-sm dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 font-bold py-2 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 mr-2">
                      <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                    Back
                  </button>
                </a> )}
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        {/* { ? <Profile /> : <PostedJobs/>} */}

        {inPostedJobs? <PostedJobs/> : inReviews ? <ApplicantsReview/> : inPost ? <JobPost/> :  <Profile/>}
      </div>
    </div>
  );
}

export default Sidebar