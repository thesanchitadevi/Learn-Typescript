// Objest Destructuring
const userName = {
    id: 42,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    },
    address: {
        city: 'New York',
        country: 'USA'
    },
    contact: '555-555-5555'
};

const { contact, name: { firstName } } = userName;

// Array Destructuring
const cities = ['New York', 'London', 'Paris', 'Berlin', 'Tokyo'];
const[,, dreamCity, ...others] = cities;
// console.log(dreamCity); // Paris
