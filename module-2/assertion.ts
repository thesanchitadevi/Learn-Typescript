// type assertion

let message: any;
message = 'Hello World';
(message as string).length; // 11

const kgToGram = (weight: number | string): string | number | undefined => {
    if (typeof weight === 'string') {
        const convertedWeight = parseFloat(weight) * 1000;
        return `This is the converted value ${convertedWeight}`;
    }
    if (typeof weight === 'number') {
        return `This is the value ${weight * 1000}`;
    }
}

const result1 = kgToGram('10') as string; // This is the converted value 10000
const result2 = kgToGram(10) as number; // This is the value 10000

// try catch block
type Message = {
    message: string
}

try {

} catch (error) {
    console.log((error as Message).message);
}
