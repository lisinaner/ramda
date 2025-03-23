// 1.ts
var modulePath = "./source/add";
var add = await import(modulePath);
console.log(add.default(1, 2));
