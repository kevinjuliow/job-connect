import Nav from "../../components/navigation/Nav"
import SearchBox from "../../components/search/SearchBox"
import Jobs from "./Jobs"


const Explore = () => {

  return (
    <div className="w-full h-screen">
      <Nav/>
      <SearchBox/>
      <Jobs/>
    </div>
  )
}

export default Explore