import fs from "node:fs";
import path from "node:path";

const db = {};
// const getFileNameFromFolder = (dirName) => {
//   return fs.readdirSync(path.join(".", dirName));
// };
// fs.readdirSync(".").forEach((dir) => {
//   if (dir.slice(-3) !== ".js" && dir[0] !== ".") {
//     const models = getFileNameFromFolder(dir);

//     models.forEach(async (file) => {
//       const filePath = `./${dir}/${file}`;
//       db[file] = await import(filePath);
//       console.log(db[file]);
//     });
//   }
// });

let funcs = import("./functions/func1.js").then((obj) => {
  const fn = obj.default;
  console.log(fn());
});
console.log(funcs);
