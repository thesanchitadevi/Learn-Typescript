// Nullable types
const search =(value :string | null) => {
    if(value) {
        console.log(`Search result for ${value}`);
    }
    else {
        console.log('No search result');
    }
}

// search('Harry Potter');
// search(null); 

// Unknown types
const multiply = (num: unknown) => {
    if(typeof num === 'number') {
        const result = (num * 10) / 3.4;
        console.log(`Result: ${result}`);
    }

    else if(typeof num === 'string') {
        const [text, number] = num.split(' ');
        console.log({number});
        const result = (parseFloat(number) * 10) / 3.4;
        console.log(`Result: ${result}`);
    }

    else {
        console.log('Invalid input');
    }
}

// multiply(`Number 10`);
// multiply(10);
multiply(null)


// Never types
// const throwError = (message: string): never => {
//     throw new Error(message);
// }
// throwError('This is an error message');

function throwError1(message: string): never { 
    throw new Error(message); 
}
throwError1('This is an error message');