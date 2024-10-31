//  Spread Operator in array
const booksList1 : string[] = ['Don Quixote', 'The Hobbit', 'Alice in Wonderland'];

const booksList2 : string[] = ['The Alchemist', 'The Prophet', 'The Little Prince'];

// booksList1.push(booksList2); // Error: Argument of type 'string[]' is not assignable to parameter of type 'string'.
// output: ['Don Quixote', 'The Hobbit', 'Alice in Wonderland', ['The Alchemist', 'The Prophet', 'The Little Prince']]

booksList1.push(...booksList2);
// output: ['Don Quixote', 'The Hobbit', 'Alice in Wonderland', 'The Alchemist', 'The Prophet', 'The Little Prince']

//  Spread Operator in object
const genre1 = {
    type1: 'fiction',
    category1: 'novel'
};

const genre2 = {
    type2: 'non-fiction',
    category2: 'biography'
};
const allGenres = { 
    ...genre1, 
    ...genre2 
};
// output: { type1: 'fiction', category1: 'novel', type2: 'non-fiction', category2: 'biography' }
