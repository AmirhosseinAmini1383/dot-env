require("dotenv").config();
// console.log(process.env.PORT);
// console.log(process.env.BASE_URL);

// development => https://localhost:3000
// production => https://api.folan.ir

console.log(process.env.NODE_ENV);
const baseURL =
  process.env.NODE_ENV === "development"
    ? "https://localhost:3000"
    : "https://api.folan.ir";
console.log(baseURL);
