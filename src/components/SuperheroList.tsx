
import { FC, useEffect,useState } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import Loader from "../components/Loader";
import SuperHeroCard from "./SuperHeroCard";
import { getHeros } from "../features/heros/heroSlice";
import { Link } from "react-router-dom"
import Pagination from "./Pagination";
  
const SuperheroList: FC = () =>{
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [herosPerPage] = useState(30);
    

    useEffect(() => {
        dispatch(getHeros());
    }, [dispatch]);

    const { loading, heros,error } = useAppSelector((state) => state.heros);
    const indexOfLastHero = currentPage * herosPerPage;
    const indexOfFirstHero = indexOfLastHero - herosPerPage;
    const currentHeros = heros?.slice(indexOfFirstHero, indexOfLastHero);
    const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

    if(loading){
        return <Loader/>
    }
    
    

    return (
      <div className="bg-white">
        <div className="w-full mx-auto max-w-2xl py-16 px-10 sm:py-24 sm:px-6 lg:max-w-full lg:px-8">
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
           
             {currentHeros?.map((hero) => (
                <div key={hero.id} className="group relative">
                    <Link to={`/heros/${hero.id}`}>
                        <SuperHeroCard hero={hero}></SuperHeroCard>
                    </Link>
                  
                </div>
              ))}
            
            {error && 
                <div>
                    <h2> Ocurrio un error al intentar cargar los heroes</h2>
                </div>
            }
             
          </div>
        </div>
        <div style={{textAlign:"center",margin:20}}>
            <Pagination
                    herosPerPage={herosPerPage}
                    totalHeros={heros?.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
        </div>
        
      </div>
    )
  }


  export default SuperheroList
  