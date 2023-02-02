interface Appearance {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
}

interface Biography {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string[];
    firstAppearence: string;
    publisher: string;
    alignment: string;
}

interface Work {
    occupation: string;
    base: string;
}

interface Connections {
    groupAffiliation: string;
    relatives: string
}

interface Images {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}

interface PowerStats {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
}


interface  Hero  {
    id: number;
    name: string;
    slug: string;
    powerstats:PowerStats;
    appearance: Appearance;
    biography: Biography;
    work: Work;
    connections: Connections;
    images: Images;

}



export default Hero;