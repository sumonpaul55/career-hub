import { NavLink } from "react-router-dom"
import React from "react"
function Navbar() {
  return (
    <div className="flex gap-5 items-center">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink className="" to="/statistics">Statistics</NavLink>
      <NavLink to="applied-jobs">Applied Jobs</NavLink>
      <NavLink to="blog">Blog</NavLink>
    </div>
  )
}

export default Navbar