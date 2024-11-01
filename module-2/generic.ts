// Generic type

type GenericArray<T> = Array<T>; // Generic type, T is a placeholder

// const serial: number[] = [1, 2, 3, 4, 5];
// const serial: Array<number> = [1, 2, 3, 4, 5];
const serial: GenericArray<number> = [1, 2, 3, 4, 5];

// const movies: string[] = ['The Godfather', 'The Dark Knight', 'Shawshank Redemption'];
// const movies: Array<string> = ['The Godfather', 'The Dark Knight', 'Shawshank Redemption'];
const movies: GenericArray<string> = ['The Godfather', 'The Dark Knight', 'Shawshank Redemption'];

// const bool : boolean[] = [true, false, true];
// const bool : Array<boolean> = [true, false, true];
const bool: GenericArray<boolean> = [true, false, true];

// In object
const userList: GenericArray<{ name: string, age: number }> = [ // Array of objects
    { name: 'John', age: 20 },
    { name: 'Doe', age: 25 }
];

// In tuple
interface IUser {
    name: string;
    age: number;
}

type GenericTuple<X, Y> = [X, Y]; // Generic type, X and Y are placeholders
const userUsingGenericTuple : GenericTuple<number, IUser> = [1, { name: 'John', age: 20 }]; 