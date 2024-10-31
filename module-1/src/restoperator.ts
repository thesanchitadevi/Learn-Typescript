// Rest Opersator

const students =(...names: string[]) => {
    // console.log(`Hello ${names.join(', ')}`);

    names.forEach((name: string) => {
        console.log(`Hello ${names.join(', ')}`);
    });
}

students('John', 'Jane',  'James', 'Jill');

//output: Hello John, Jane, James, Jill
