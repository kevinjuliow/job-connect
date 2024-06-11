import register from "../../assets/imgs/appregistration.png"
import search from "../../assets/imgs/search.png"
import waiting from "../../assets/imgs/hourglass.png"
import complete from "../../assets/imgs/complete.png"

const About = () => {
  return (
    <div id="about-page" className="h-[40rem] mt-[-72px] bg-white flex flex-col items-center justify-center w-[1024px] mb-20">
      <h1 className="text-center font-bold text-3xl mb-16 opacity-90">About</h1>
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-center justify-center w-[180px] mx-6">
          <div className=" border-4 border-purple-700 rounded-full p-5">
            <img src={search} alt="" className="w-12" />
          </div>
          <p className="text-xl font-semibold mt-2 mb-1">Search</p>
          <p className="text-sm text-gray-500 text-center">Find a job based on your experience</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[180px] mx-6">
          <div className=" border-4 border-purple-700 rounded-full p-5">
            <img src={register} alt="" className="w-12" />
          </div>
          <p className="text-xl font-semibold mt-2 mb-1">Register</p>
          <p className="text-sm text-gray-500 text-center">Apply for a job with easy step</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[180px] mx-6">
          <div className=" border-4 border-purple-700 rounded-full p-5">
            <img src={waiting} alt="" className="w-12" />
          </div>
          <p className="text-xl font-semibold mt-2 mb-1">Waiting</p>
          <p className="text-sm text-gray-500 text-center">Waiting for company approval</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[180px] mx-6">
          <div className=" border-4 border-purple-700 rounded-full p-5">
            <img src={complete} alt="" className="w-12" />
          </div>
          <p className="text-xl font-semibold mt-2 mb-1">Approved</p>
          <p className="text-sm text-gray-500 text-center">Getting your dream job, you always wanted</p>
        </div>
      </div>
    </div>
  )
}

export default About