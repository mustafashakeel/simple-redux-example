https://www.typescriptlang.org/
https://www.typescriptlang.org/play/index.html

to Install Typescript
npm install -g typescript

to compile
tsc file1.ts

tsc --outDir output *.ts

You can also concatinate all the specified files into a single JavaScript file. If you want the single JavaScript file to be called output.js you would type:

tsc --out output.js file1.ts file2.ts