import { Link } from "react-router-dom";

export default function NotFound() {

    return(
        <>
         <div className="absolute right-1/2 bottom-1/2  ">
            <h1 className="text-xl">404 - Not Found!</h1>
            <Link to="/heros">
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Go Home
                </button>
            </Link>
        </div>
        </>
       
    )

}