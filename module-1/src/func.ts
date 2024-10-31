// Normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, '2'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

//  Arrow function
const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

// const addArrow = (num1: number, num2: number): number => num1 + num2;

// Function in object = Method
const  book = {
    title: 'The Alchemist',
    price: 10,
    // addMoney(discount: number): number {
    //     return this.price - discount;
    // }
    addMoney(discount: number): string {
        return `Here the new price of the book : ${this.price - discount}`;
    }
};

const arr : number[] = [1, 2, 3, 4, 5];
const newArr : number[] = arr.map((item: number): number => item * item);

