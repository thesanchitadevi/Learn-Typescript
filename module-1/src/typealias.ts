// Type Alias in object

type Country = {
    name: string;
    population: number;
    primeMinister?: string; // Optional property
    capital: string;
};

const india: Country = {
    name: 'India',
    population: 1330000000,
    primeMinister: 'Narendra Modi',
    capital: 'New Delhi'
};

const usa: Country = {
    name: 'USA',
    population: 331000000,
    capital: 'Washington DC'
};

type IsAdmin = boolean;
const isAdmin: IsAdmin = true;

// Type alias in function

type Add = (num1: number, num2: number) => number;

const addNum: Add = (num1, num2) => num1 + num2;

