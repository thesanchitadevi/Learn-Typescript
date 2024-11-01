// Generic interface
interface ICountry<T, X = null> {
    name: string;
    population: number;
    stateDetails: {
        state: string;
        capital: string;
        statePopulation: number;
    }
    OceanDetails: T;
    MountainDetails?: X;
}

// Generic interface with nested object

type OceanDetails = { ocean: string, area: number }
const country1: ICountry<OceanDetails> = { // ICountry<OceanDetails, Null> 
    name: 'USA',
    population: 331002651,
    stateDetails: {
        state: 'California',
        capital: 'Sacramento',
        statePopulation: 39538223
    },
    OceanDetails: {
        ocean: 'Pacific',
        area: 62560000
    },
    // MountainDetails: null
}

interface IOceanDetails { isOceanic: boolean, ocean: string, area: number } 
interface IMountainDetails { isMountainous: boolean, mountain: string, height: number }
const country2: ICountry<IOceanDetails, IMountainDetails> = {
    name: 'India',
    population: 1380004385,
    stateDetails: {
        state: 'Maharashtra',
        capital: 'Mumbai',
        statePopulation: 112374333
    },
    OceanDetails: {
        isOceanic: true,
        ocean: 'Indian',
        area: 7056000
    },
    MountainDetails: {
        isMountainous: true,
        mountain: 'Himalaya',
        height: 8848
    }
}