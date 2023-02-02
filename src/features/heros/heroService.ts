import axios from 'axios'


const getHeros = async () => {
    
    const response = await axios.get("https://akabab.github.io/superhero-api/api/all.json")
    return response.data
  }

const getHeroById = async (heroId:any) => {
    const response = await axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
    return response.data
  }

const herosService = {
    getHeros,
    getHeroById,
}

export default herosService
