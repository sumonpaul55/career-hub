import {Link} from "react-router-dom"
function PageNotFound() {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className="rounded-lg bg-gray-300 p-20 shadow-lg">

            <h2>Page Not Found</h2>
            <Link className="bg-indigo-400 opacity-90 px-4 py-1 rounded-md mt-5 block text-white" to="/">Go Home</Link>
        </div>
    </div>

  )
}

export default PageNotFound