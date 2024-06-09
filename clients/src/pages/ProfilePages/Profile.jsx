import { useContext } from "react"
import Nav from "../../components/navigation/Nav"
import { AppContext } from "../../context/ContextProvider"

const Profile = () => {
  const {auth} = useContext(AppContext)
  return (
    <div>
      <Nav/>
      <div className="mt-20 w-[1204px] mx-auto">
        <div className="border border-black w-200 h-[700px]">
            {auth.full_name}
        </div>
      </div>
    </div>
  )
}

export default Profile