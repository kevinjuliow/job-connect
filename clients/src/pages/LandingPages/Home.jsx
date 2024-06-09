import { FlipWords } from "../../components/ui/FlipWords.tsx";
import Images from "../../assets/imgs/landing-image.svg";
import { useState, useEffect } from "react";

const Home = () => {
  const words = ["Future", "Career", "Goals", "Dreams", "Jobs"];

  const [authData, setAuthData] = useState({})

  // Retrieving data from Local Storage and Session Storage
  const retrieveData = () => {
    const storedData = sessionStorage.getItem('auth');
    console.log("INI DARI HOME", JSON.parse(storedData))
    if (storedData) {
      setAuthData(JSON.parse(storedData));
    }
  };
  
  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <div className="h-[40rem] flex justify-center mx-auto">
      <div className="text-[40px] mx-auto font-bold tracking-tight mt-24 relative opacity-85">
      Empowering Your {authData && authData.address ? authData.address : "NO DATA"}
        <span className="bg-gradient-to-r from-blue-500 via-purple-700 to-red-500 text-transparent bg-clip-text ml-2">
          Career Journey
        </span>
        <br />
        <div className="text-4xl font-medium">
          <span className="ml-80">Find Your </span>
          <FlipWords words={words} />
          Today
        </div>
      </div>
      <div className="absolute top-[180px] left-[180px] flex mt-10 w-2/3">
        <img src={Images} alt="/" className="w-1/2 " />
        <div className="flex flex-col items-center gap-8">
          <p className="text-gray-500">
            We build website for your business that actually converts.
            Wonderfully designed, masterfully created websites and layouts,
            created by the founders of Google and Facebook. The ideal beginning
            stage for your next project.
          </p>
          <button className="bg-purple-600 text-white w-40 h-10 rounded-lg cursor-pointer hover:shadow-[5px_5px_10px_rgba(0,0,0,0.8)] hover:mr-4 hover:transition-[.5s] transition-[.5s]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
