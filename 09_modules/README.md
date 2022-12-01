# Modules

## Module Scope

- Since ES 2015, JavaScript has a concept of modules. 
  - TypeScript shares this concept
- Modules are executed within their own scope
  - declarations are not visible outside 
  - unless they are explicitly exported
- Exported declarations can be imported in other modules

## Named Exports

- Any declaration can be exported by adding the keyword.

  -  such as a variable, function, interface or class

  ```typescript[|1|2|4-8]
  // cylinder-module.ts
  export const MAX_HEIGHT: number = 50;
  
  export interface Cylinder {
      radius: number;
      height: number;
      colour: string;
  };
  ```

- You import it with the same name.

  ```typescript[|1|2|4]
  // app.ts
  import { Cylinder, MAX_HEIGHT } from './cylinder-module';
  
  const redCylinder: Cylinder = { radius: 2, height: MAX_HEIGHT, colour: 'red' };
  ```

  

## Default Exports

- Each module can optionally have one `default` export. 

  ```typescript[|1|2|3]
  // hobbies-module.ts
  const hobbies: String[] = ['reading', 'cooking', 'sleeping'];
  export default hobbies;
  ```

- When importing it, you can choose any name.

  ```typescript[|1|2|3]
  // app.ts
  import myHobbies from './hobbies-module';
  console.log(myHobbies);	// ['reading', 'cooking', 'sleeping']
  ```

## Quote Style in VS Code

- You can specify the quote that VS Code uses for auto imports.
- The setting `typescript.preferences.quoteStyle`  specifies the type of quotes to use:
  - `"single"` quotes
  - `"double"` quotes
  - `"auto"` to infer quote type from existing imports