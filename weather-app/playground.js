// setTimeout(() => {
//   console.log("2 seconds are up");
// }, 2000);

// const names = ["Andrew", "jen", "jess"];
// const shortNames = names.filter(name => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("philadelphia", data => {
//   console.log(data);
// });

// const add = (num1, num2, callback) => {
//   setTimeout(() => {
//     const sum = num1 + num2;
//     callback(sum);
//   }, 2000);
// };

// add(1, 4, sum => {
//   console.log(sum); // Should print: 5
// });

// object property shorthand
// const name = "jack";
// const userage = 24;
// const user = {
//   name,
//   age: userage,
//   location: "California"
// };
// console.log(user);

//object destructuring
const product = {
  label: "red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
};

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
