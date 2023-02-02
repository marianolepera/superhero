import { FC } from "react";
const SuperHeroCard: FC  = ({hero}:any) =>{
    return(
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-110 transition duration-300 transform  shadow-lg hover:shadow-indigo-600 hover:shadow-md">
                <img className="w-full" src={hero.images.lg} alt="Sunset in the mountains"></img>
                <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">{hero.name}</div>
                    <div className="font-bold text-lg mb-2">height: {hero.appearance.height[1]}</div>
                    <div className="font-bold text-lg mb-2">height: {hero.appearance.weight[1]}</div>
                    <p className="text-gray-700 text-base">
                        {hero.appearance.race}
                    </p>
                </div>
            </div>
        </>
    )

}

export default SuperHeroCard