import {  Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="bg-blue-700 h-15">
        <Link to="/heros">
            <h3 className="text-2xl font-bold leading-7 text-center text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Superhero App
            </h3>
        </Link>
    </div>
  )
}
