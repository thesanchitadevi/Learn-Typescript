// Reference type

const user: {
    firstNama: string;
    middleName?: string; //Optional Type
    lastName: string;
    // topic: string;
    topic: "Typescript"; //Literal Type as value is declared directly and fixed
} = {
    firstNama: 'John',
    lastName: 'Doe',
    topic: "Typescript"
}
