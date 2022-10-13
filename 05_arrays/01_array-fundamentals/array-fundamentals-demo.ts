// you can create arrays with hte new keyword
const empty1: string[] = new Array();
const meals = new Array('spaghetti', 'pizza', 'chips');
console.log(meals);

console.log('---------------------------------------------------');

// but you should prefer array literal syntax
const empty2: string[] = [];
const hobbies = ['running', 'cooking', 'reading', 'travelling'];

// you can copy the whole array or just a part
const allHobbies = hobbies.slice();
const someHobbies = hobbies.slice(1, 3);
console.log(allHobbies);    // output: ['running', 'cooking', 'reading', 'travelling']
console.log(someHobbies);   // output: ['cooking', 'reading']

console.log('---------------------------------------------------');

// you can add element at the end
hobbies.push('sleeping');
console.log(hobbies);

// you can remove the last element
let sleeping: string | undefined = hobbies.pop();
console.log(hobbies);

// exclamation mark operator '!': We are sure that sleeping is not null!
hobbies.push(sleeping!);
// otherwise test nullability explicitely:
if (sleeping !== null) {
    // here we are safe to access sleeping
    // hobbies.push(sleeping);
}


console.log('---------------------------------------------------');

const hobbiesToSplice = ["running", "cooking", "reading", "travelling"];
// you can remove elements
const removedHobbies = hobbiesToSplice.splice(1, 2);

console.log(hobbiesToSplice);        // output: ['running', 'travelling']
console.log(removedHobbies); // output: ['cooking', 'reading']

