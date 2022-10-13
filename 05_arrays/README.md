# Arrays

## JavaScript Arrays

- JavaScript arrays aren't [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) but are instead `Array` objects.

- JavaScript arrays can contain a mix of different data types and are resizable:

  ```JavaScript [|1|2|3]
  let myArray = [1, 'hello', true];
  myArray.push('world');
  console.log(myArray); // output: [1, 'hello', true, 'world']
  ```

<!---->

- JavaScript arrays are [zero-indexed](https://en.wikipedia.org/wiki/Zero-based_numbering):

  ```javascript [|1|2]
  console.log(myArray[1]); // output: hello
  console.log(myArray[myArray.length - 1]); // output: world
  ```

- JavaScript [array-copy operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copy_an_array) create [shallow copies](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy):

  ```javascript [|1|2|3]
  let objects = [new Object(), new Object()];
  let objectsCopy = Array.from(objects);
  console.log(objects[0] === objectsCopy[0]); // output: true
  ```

## TypeScript Arrays

- To specify the type of an array like `[1, 2, 3]`, you can use the syntax `number[]`:

  ```typescript
  let nums: number[] = [1, 2, 3];
  ```

- The syntax above works for any type (e.g. `string[]` is an array of strings, and so on).

- You may also see following syntax instead of `number[]`:

  ```typescript
  let moreNums: Array<number> = [4, 5, 6];
  ```

## Common array operations

### `push` and `pop`

- `push` adds an element at the end of the array
- `pop` removes and returns the last element (or `undefined`, if the array is empty)

```typescript [|1|2|3]
const hobbies = ["running", "cooking", "reading", "travelling"];
hobbies.push("sleeping");
let sleeping: string | undefined = hobbies.pop();
```

<!---->

> 💡 **Note**:
>
> - Use `shift` to remove and return the first element (or `undefined`, if empty)
> - Use `unshift` to add one or more elements to the top of the array

### `slice` and `splice`

- `slice` returns a part of the array from a start index until an exclusive end index
- `splice` removes and returns a part of the array

```typescript [|1|3-7|9-13]
const hobbies = ["running", "cooking", "reading", "travelling"];

// you can copy the whole array or just a part
const allHobbies = hobbies.slice();
const someHobbies = hobbies.slice(1, 3);
console.log(allHobbies); // output: ['running', 'cooking', 'reading', 'travelling']
console.log(someHobbies); // output: ['cooking', 'reading']

// you can remove the whole array or just a part
const removedHobbies = hobbies.splice(1, 2);
console.log(hobbies); // output: ['running', 'travelling']
console.log(removedHobbies); // output: ['cooking', 'reading']
```

## Tuples

- Tuple definition

```typescript
// Basic type 'Tuple'
let aTuple: [number, string] = [1, "Hello"];
let aListOfTuples: Array<[number, string]> = [
  [1, "Hello"],
  [2, "World"],
];
```

- Typesafe access of tuple members

```typescript
let numberInTuple: number = aTuple[0];
let stringInTuple: string = aTuple[1];
//numberInTuple = aTuple[1]; => invalid!
```

## Enums

```typescript
enum Color {
  Red,
  Green,
  Blue,
} // Note that first enum starts with value 0
let anEnum: Color = Color.Green; // Assignment; anEnum gets value 1

console.log(`Value: ${anEnum} as string: ${Color[anEnum]}`);
// output: 'Value: 1 as string: Green'
```
