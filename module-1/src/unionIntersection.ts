// Union Types
type Coffee = 'americano' | 'latte' | 'cappuccino';
type Tea = 'green' | 'black' | 'ginger';

type HotDrink = Coffee | Tea;

const myCoffee: Coffee = 'americano';

type User = {
    name: string;
    age: number;
    gender: 'male' | 'female';
    bloodGroup: 'A+' | 'B+' | 'O+' | 'AB+';
}

const user1: User = {
    name: 'John Doe',
    age: 25,
    gender: 'male',
    bloodGroup: 'A+'
}

//  Intersection Types
type UiDesigner = {
    title1: 'Ui Designer';
    company: string;
    skills: string[];
}

type WebDeveloper = {
    title2: 'Web Developer';
    company: string;
    skills: string[];
}

type FullStackDeveloper = UiDesigner & WebDeveloper;

const fullStackDev: FullStackDeveloper = {
    title1: 'Ui Designer',
    title2: 'Web Developer',
    company: 'Google',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
}