{
    // Generic function
    const createArray = (param: string): string[] => {
        return [param];
    }

    const result = createArray('Hello'); // ['Hello']

    const createArrayGeneric = <T>(param: T): T[] => {
        return [param];
    }
    const resultArrayGeneric = createArrayGeneric<string>('Hello'); // ['Hello']

    type User = { name: string, age: number }

    const resultGenericObject = createArrayGeneric<User>({ name: 'John', age: 20 }); // [{ name: 'John', age: 20 }]

    // Tuple
    const createGenericTuple= <X,Y>(param1:X, param2: Y): [X , Y] => {
        return [param1, param2];
    }

    const resultGenericTuple = createGenericTuple<string, number>("Hello", 10); // ['Hello', 10]
    const resultGenericTuple1 = createGenericTuple<number, {name: string, age: number}>(10, { name: 'John', age: 20 }); // [10, { name: 'John', age: 20 }]

    const addNationality=<T>(person : T) =>{
        const nationality = 'Australian';

        return {
            ...person, 
            nationality
        }
    }

    const person1 = addNationality({
        name: 'John',
        age: 20,
        citizenType: 'Permanent'
    }) 
    
    const person2 = addNationality({
        name: 'Don',
        age: 40,
        jobType: 'Full-time'
    })
    

}
