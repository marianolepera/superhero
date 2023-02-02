import { useParams } from "react-router-dom"
import { FC, useEffect,useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from 'react-router-dom';
import { getHerobyId } from "../features/heros/heroSlice";
import Loader from "../components/Loader";

const SuperHeroDetail =()=> {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams()

  useEffect(() => {
    dispatch(getHerobyId(id));
}, [dispatch]);
const { loading, heroSelected,error } = useAppSelector((state) => state.heros);

if(loading){
    return <Loader/>
}

  return (
    <>
        <div className="flex justify-center m-10">
            <div className="flex flex-col md:flex-row h-900 w-100 bg-white shadow-lg">
                <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={heroSelected?.images.lg} alt="" />
                <div className="p-6 flex flex-col justify-start">

                <h5 className="text-gray-900 text-2xl font-bold mb-2">{heroSelected?.name}</h5>
                <div className="flex flex-row gap-8">
                    <div className="flex flex-col">
                        <p className="text-gray-900 text-xl font-bold mb-1">Appearance</p>
                        <p className="text-gray-900 text-lg font-medium mb-1">Gender: {heroSelected?.appearance.gender}</p>
                        <p className="text-gray-900 text-lg font-medium mb-1">Race: {heroSelected?.appearance.race}</p>
                        <p className="text-gray-900 text-lg font-medium mb-1">Height: {heroSelected?.appearance.height[1]}</p>
                        <p className="text-gray-900 text-lg font-medium mb-1">Weight: {heroSelected?.appearance.weight[1]}</p>
                        <p className="text-gray-900 text-lg font-medium mb-1">Eyes color: {heroSelected?.appearance.eyeColor}</p>
                        <p className="text-gray-900 text-lg font-medium mb-1">Hair color: {heroSelected?.appearance.hairColor}</p>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-gray-900 text-xl font-bold mb-1">Biography</p>
                    <p className="text-gray-900 text-lg font-medium mb-1">Full name: {heroSelected?.biography.fullName}</p>
                    <p className="text-gray-900 text-lg font-medium mb-1">Alter egos: {heroSelected?.biography.alterEgos}</p>
                    <p className="text-gray-900 text-lg font-medium mb-1">Aliases: {heroSelected?.biography.aliases}</p>
                    <p className="text-gray-900 text-lg font-medium mb-1">Place of birth: {heroSelected?.biography.placeOfBirth}</p>
                    <p className="text-gray-900 text-lg font-medium mb-1">First Appearance: {heroSelected?.biography.firstAppearence}</p>
                    <p className="text-gray-900 text-lg font-medium mb-1">Publisher: {heroSelected?.biography.publisher}</p>
                    <p className="text-gray-900 text-lg font-medium mb-1">Alignment: {heroSelected?.biography.alignment}</p>
                </div>

                </div>
                <div className="flex flex-row gap-2">
                    <p className="text-gray-900 text-xl font-bold mb-1">
                        Work: 
                    </p>
                    <p className="text-gray-900 text-lg font-medium mb-1">
                        {heroSelected?.work.occupation}
                    </p>
                </div>
                <button type="button" onClick={()=>navigate(-1)}className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Go Back
                </button>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default SuperHeroDetail;