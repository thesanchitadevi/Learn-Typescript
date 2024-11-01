{
    // In javascript array is object, function is object, object is object
    // In typescript array is array, function is function, object is object

    
    // In object
    type User = {
        name: string;
        age: number;
        address: string;
        phone: string;
        email: string;
    }

    type UserWithRole = User & { role: string }; // Intersection type

    const user1: UserWithRole = {
        name: 'John',
        age: 20,
        address: 'USA',
        phone: '123456789',
        email: 'abc',
        role: 'admin'
    }

    type rollNo = number; // Type alias
    // Premetive types can be used as type alias but not interface

    // Interface is used to define the structure of an object
    interface IUser { // Interface name should start with capital letter
        name: string;
        age: number;
        address: string;
        phone: string;
        email?: string;
    }

    interface IUserWithRole extends IUser { // Interface can extend another interface
        role: string;
    }

    const user2: IUserWithRole = { // Object should follow the interface
        name: 'John',
        age: 20,
        address: 'USA',
        phone: '123456789',
        role: 'admin'
    }


    // In array
    type roll1 = number[];
    const roll: roll1 = [1, 2, 3, 4, 5];

    //Interface for array
    interface IRoll1 {
        [index: number]: number;
    }
    const roll2: IRoll1 = [1, 2, 3, 4, 5];
    //    0  1  2  3  4 // Index


    // In function
    type Add = (num1: number, num2: number) => number;
    const add1: Add = (num1, num2) => num1 + num2;
    //Interface for function
    interface IAdd {
        (num1: number, num2: number): number;
    }
    const add: IAdd = (num1, num2) => num1 + num2;
}