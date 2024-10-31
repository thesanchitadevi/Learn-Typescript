// Terbary Operator || Optional Chaining Operator || Nullish Coalescing Operator

//Terbary Operator
const num1: number = 10;

if (num1 >= 10) {
    console.log('Positive');
} else {    
    console.log('Negative');
}

const age: number = 25;

const isAdult = age >= 18 ? 'Adult' : 'Minor';
console.log({ isAdult });

// Nullish Coalescing Operator
const isVerified = null; 
// const isVerified = ''; // if isVerified is empty string then it will return "Not Verified"
const isLoggedIn = isVerified ?? "Not Verified"; // if isVerified is null or undefined then it will return "Not Verified"
console.log({ isLoggedIn });
const isLoggedIn1 = isVerified ? isVerified :"Not Verified"; 
console.log({ isLoggedIn1 });

// Optional Chaining Operator
type Person = {
    name: string;
    age: number;
    address?: {
        city: string;
        country: string;
        roadNo?: number;
    }
}

const person1: Person = {
    name: 'John Doe',
    age: 25,
    address: {  
        city: 'New York',
        country: 'USA'
    }
}

const roadNo = person1?.address?.roadNo ?? 'Not Available'; // if roadNo is not available then it will return "Not Available"
console.log({ roadNo });
