const fs = require('fs');
const p = 'tsconfig.json';
let s = fs.readFileSync(p, 'utf8');
// strip /* */ and // comments
s = s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
const j = JSON.parse(s);
j.compilerOptions = j.compilerOptions || {};
delete j.compilerOptions.types;
j.compilerOptions.typeRoots = ['./node_modules/@types', './src/types'];
fs.writeFileSync(p, JSON.stringify(j, null, 2));
console.log('Updated', p);
