import Sidebar from "../../components/layout/company/Sidebar"
import NavCompany from "../../components/navigation/NavCompany"

const Company = () => {
  return (
    <div className="w-full h-screen">
      <NavCompany/>
      <Sidebar/>
    </div>
  )
}

export default Company