import Navbar from "./Navbar"

function Header() {
  return (
    <div className="container mx-auto py-3 border-b">
        <div className="flex justify-between">
            <div>
                <h2>Logo</h2>
            </div>
            <div>
                <Navbar></Navbar>
            </div>
            <div><button className="px-4 py-1 bg-indigo-300 rounded-md">Apply Now</button></div>
        
        </div>
    </div>
  )
}

export default Header